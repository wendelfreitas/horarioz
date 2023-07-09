# use-get-service-by-id

## Overview

The `useGetServiceById` hook is a function to fetch a specific service using its `id`. It is built using the `useQuery` hook from `@tanstack/react-query` and Supabase to interact with the backend service.

## Usage

```jsx
const { data, isError, isLoading, error } = useGetServiceById('YourServiceID');

if (isLoading) return 'Loading...';

if (isError) return `Something went wrong: ${error.message}`;

return (
  <div>
    Service Information:
    <br />
    Name: {data.service.name}
    Description: {data.service.description}
    <br />
    Price: {data.service.price}
    Duration: {data.service.duration}
  </div>
);
```

This usage example demonstrates how to consume the `useGetServiceById` hook. The function returns an object that includes:

- `data`: This attribute will contain the data from the query, i.e., the service information object. If the query is still under processing, it'll be in the loading state and `data` will be `undefined`. If there's an error during the query execution, `data` will also be `undefined`.
- `isError`: It's a boolean attribute indicating whether the query ended with an error. It can be used to conditionally render an error message or some fallback UI.

- `isLoading`: It's a boolean attribute indicating if the query is still in progress. It can be used to conditionally render a loading spinner or some placeholder content.

- `error`: This will contain the actual error object in case an error occurred while executing the query. The error object could have different properties depending on the type of error, but generally it should have a `.message` property.

The `id` argument passed to `useGetServiceById` is used to define which service should be fetched. The `enabled` option is used to prevent the query from automatically running when `id` is `undefined` or not yet available.
