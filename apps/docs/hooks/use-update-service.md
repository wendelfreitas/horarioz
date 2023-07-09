# use-update-service

## Overview

The `useUpdateService` hook is a custom hook for updating a service in your database. It uses the `useMutation` method from the `@tanstack/react-query` library for the mutation and `useSupabase` to provide access to Supabase client methods and interact with your database.

## Type Definitions

### ServiceInput

The `ServiceInput` type is used for the inputs required to update a service:

- `name (string)`: The new name for the service.
- `description (string)`: The new description for the service.
- `price (number)`: The new price for the service.
- `duration (string)`: The new duration of the service.

### Service

The `Service` type defines the structure of a single service using the `Database` type from `@horarioz/supabase`.

### UpdateServiceResponse

The response object from the `useUpdateService` hook.

- `data (Service | null)`: The updated service data from the database if successfully updated, otherwise null.
- `error (PostgrestError | null)`: The error object if the request fails, otherwise null.

### Filter

The `Filter` type is used to define the required filter when updating a service:

- `column (keyof Pick<Service, 'id'>)`: The column used to filter the services to be updated. Typically it would be `id`.
- `value (string, optional)`: The value used for filtering in the selected column.

## Usage

```jsx
const { mutate, isError, error, isLoading, data } = useUpdateService(
  {
    column: 'id',
    value: 'YourServiceId',
  },
  {
    onError: (error) => {
      // Handler function for error
    },
    onSuccess: (result) => {
      // Handler function for success
    },
  }
);

// When ready to update
mutate({
  name: 'NewServiceName',
  description: 'NewServiceDescription',
  price: NewServicePrice,
  duration: 'NewServiceDuration',
});
```

In the example shown, the `useUpdateService` hook is called with a `Filter` object and an options object. The `Filter` object specifies which service to update based on `id`, and the options object can include callbacks for error or success scenarios.

The `mutate` function returned from the hook takes an object with updates that will be applied to the selected service. A successful update will result in the updated service's data being available in the `data` attribute. If an error occurs during the update operation, `isError` will return `true` and `error` will contain the error object. `isLoading` can be used to show a loading indicator during the processing of the service update.
