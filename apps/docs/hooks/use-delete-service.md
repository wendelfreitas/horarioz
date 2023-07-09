# use-delete-service

## Overview

The `useDeleteService` custom React hook is used to delete a service by calling the `delete` method on Supabase. The hook utilizes the `useMutation` method from the `@tanstack/react-query` library.

## Type Definitions

### `DeleteServiceResponse`

The response object from the `useDeleteService` hook.

- `'data'.id (string | null)`: The deleted service's ID if successful, otherwise null.
- `error (PostgrestError | null)`: The error object if there was an issue with deleting the service. If deleting the service is successful, this will return null.

## Usage

```js
const {
  mutate: remove,
  isLoading,
  isError,
  error,
  data,
} = useDeleteService('YourServiceID');

// Use remove() when the delete action is confirmed
remove();
```

In this example, the `useDeleteService` hook is called with a service's ID and an options object. The `mutate` function returned by this hook is used to delete the service. `isLoading` indicates the progress, `isError` and `error` can be used to handle any deletion errors, and `data` will contain the deleted service's ID upon successful deletion.

Please, be cautious when deleting data; it may not be recoverable. Depending on the setup, you might want to implement a confirmation process before deletion.
