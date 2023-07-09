# use-create-service

## Overview

The `useCreateService` custom React hook allows you to create a service on a specified company. The hook uses the `useMutation` method from the `@tanstack/react-query` library, which returns a mutate function that is used for mutation. This effect is combined with the `useSupabase` hook, which provides access to Supabase client methods to make database operations.

## Type Definitions

### `ServiceInput`

The input parameters for the `useCreateService` hook.

- `company_id (string)`: The identifier (ID) of the company for which the service is being created.
- `name (string)`: The name of the service.
- `description (string, optional)`: The description of the service.
- `price (number)`: The price of the service.
- `duration (string)`: The duration of the service.

### `CreateServiceResponse`

The response object from the `useCreateService` hook.

- `data (Database['public']['Tables']['services']['Row'] | null)`: The created service's data from the database if successful, or null.
- `error (PostgrestError | null)`: The error object if the request fails, or null.

## Usage

```js
const { mutate, isLoading, isError, error, data } = useCreateService();

mutate({
  company_id: '#12345',
  name: 'Service Name',
  description: 'Lorem ipsum dolor pikachu go!',
  price: 30.0,
  duration: '01:30',
});
```

In the example above, the `mutate` function is called with the required parameters to create a service. It returns an object with several properties which can be used to handle success, error, loading states, etc. `isLoading` is a boolean indicating if the request is in progress, `isError` is a boolean indicating if the mutation ended with an error, `error` is the error object if one occurs, and `data` contains the created service's data if the mutation ends successfully.

Please note, if you get an error, make sure to check if the `company_id` exists, the price is a valid number, and other input fields meet the necessary requirements.
