import { Button, Form, FormInput, Grid, Label } from '@smartive-education/pizza-hawaii';
import React, { FC, FormEvent, useEffect, useState } from 'react';

export type TUserFormData = {
	userName: string;
	firstName: string;
	lastName: string;
	email: string;
};

type TUserFormDataKeys = keyof TUserFormData;

export type TUserFormErrors = { [key in keyof TUserFormData]?: string };

export type TUserForm = {
	onSubmit: (data: TUserFormData) => Promise<{ status: boolean; errors?: TUserFormErrors }>;
	onCancel?: () => void;
	user?: TUserFormData;
	sectionLabel?: string;
	isLoading?: boolean;
};

const emptyState: TUserFormData = {
	userName: '',
	firstName: '',
	lastName: '',
	email: '',
};

export const UserForm: FC<TUserForm> = ({ onCancel, onSubmit, user = emptyState, sectionLabel, isLoading }) => {
	const [state, setState] = useState(user);
	const [isUntouched, setIsUntouched] = useState(true);
	const [isValid, setIsValid] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<TUserFormErrors>({});

	useEffect(() => {
		setState(user);
	}, [user]);

	// check if form is untouched
	useEffect(() => {
		const isUntouched = Object.entries(state).every(([key, value]) => value === user[key as TUserFormDataKeys]);
		setIsUntouched(isUntouched);
	}, [state, user]);

	// check if form is valid
	useEffect(() => {
		// check if all fields are empty
		const isEmpty = Object.values(state).every((value) => value === '');

		// if there are no validation errors and
		// the form is not empty, set isValid to true
		setIsValid(Object.keys(errors).length === 0 && !isEmpty);
	}, [state, errors]);

	const validateFields = (fields: HTMLFormControlsCollection) => {
		// get all fields that are not valid (empty if required, mail adress malformed, etc.)
		const invalidFields = Array.from(fields).filter((field) => {
			const { validity } = field as HTMLInputElement;

			return !validity.valid;
		});

		// get validation messages for all invalid fields
		const validationMessages = invalidFields.reduce((acc, field) => {
			const { name, validationMessage } = field as HTMLInputElement;

			acc[name as keyof TUserFormData] = validationMessage;

			return acc;
		}, {} as TUserFormErrors);

		return validationMessages;
	};

	const onSubmitHandler = async (e: FormEvent) => {
		e.preventDefault();

		setIsSubmitting(true);

		// get all fields from event target
		const { target } = e;
		const fields = (target as HTMLFormElement).elements;

		// validate fields
		const validationMessages = validateFields(fields);

		// if it's not ready to submit, set errors and return
		if (Object.keys(validationMessages).length) {
			setErrors(validationMessages);
			return;
		}

		// if it's ready to submit, call onSubmit function
		const res = await onSubmit(state);

		// if the request was successful, reset state otherwise set errors
		if (res.status === true) {
			setState(emptyState);
		} else {
			setErrors(res.errors || {});
		}

		setIsSubmitting(false);
	};

	const onFieldChange = (e: FormEvent): void => {
		const { name, value } = e.target as HTMLInputElement;

		// update state
		setState({
			...state,
			[name]: value,
		});

		// reset error for this field
		setErrors({
			...errors,
			[name]: undefined,
		});
	};

	return (
		<Form onSubmit={onSubmitHandler} noValidate>
			<fieldset>
				<Label as="legend" size="XL">
					{sectionLabel || 'Deine Daten'}
				</Label>
				<div className={['mt-4', isLoading && 'opacity-50 animate-pulse'].join(' ')}>
					<Grid variant="col" gap="M" marginBelow="M">
						<FormInput
							name="userName"
							label="User Name"
							type="text"
							value={state['userName']}
							onChange={onFieldChange}
							errorMessage={errors['userName']}
							required
							icon="mumble"
							readOnly={!!state['userName']}
							disabled={!!state['userName']}
						/>
						<FormInput
							name="email"
							label="Email"
							type="email"
							value={state['email']}
							onChange={onFieldChange}
							errorMessage={errors['email']}
							required
							autoComplete="email"
						/>
						<FormInput
							name="firstName"
							label="Vorname"
							type="text"
							value={state['firstName']}
							onChange={onFieldChange}
							errorMessage={errors['firstName']}
							required
							autoComplete="given-name"
						/>
						<FormInput
							name="lastName"
							label="Name"
							type="text"
							value={state['lastName']}
							onChange={onFieldChange}
							errorMessage={errors['lastName']}
							required
							autoComplete="family-name"
						/>
					</Grid>
				</div>
			</fieldset>

			{/*
				We use the isValid state to enable/disable the submit button only visually.
				We don't want to disable the button completely, because then the user wouldn't be able to see the errors.
			*/}
			<Grid variant="row" gap="M" marginBelow="XS">
				<div className="flex-1">
					<Button
						size="L"
						type="button"
						colorScheme="slate"
						onClick={() => {
							onCancel && onCancel();
						}}
						icon="cancel"
					>
						Zurück
					</Button>
				</div>
				{!isUntouched && (
					<div className={['flex-1', isValid ? 'opacity-50' : undefined].join(' ')}>
						<Button size="L" type="submit" colorScheme="gradient" icon="send" disabled={isSubmitting}>
							Speichern
						</Button>
					</div>
				)}
			</Grid>
		</Form>
	);
};
