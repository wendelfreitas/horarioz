# use-get-service-by-company-id

## Overview

The `useGetServiceByCompanyId` hook is a function to fetch an array of `services` associated with a specific `companyId`. The hook uses `useQuery` from the library `@tanstack/react-query` to fetch data and `useSupabase` to interact with the database.

## Type Definitions

### `Service`

The `Service` type defines the structure of a single service fetched from the database.

It is derived from the `Database` type - `'Database'['public']['Tables']['services']['Row']`.

## Usage

```jsx
const { data, isError, isLoading, error } =
  useGetServiceByCompanyId('YourCompanyID');

if (isLoading) return 'Loading...';

if (isError) return `Something went wrong: ${error.message}`;

return (
  <div>
    {data.map((service, index) => (
      <div key={index}>
        Service Name: {service.name}
        Description: {service.description}
        <br />
        Price: {service.price}
        Duration: {service.duration}
      </div>
    ))}
  </div>
);
```

The usage example of `useGetServiceByCompanyId` hook:

- `data`: This attribute will contain the data fetched by the query, i.e., an array of services. If the query is still loading or there's an error during execution, `data` will be `undefined`.
- `isError` and `isLoading`: These boolean attributes signify whether the query ended with an error or if the query is still in progress respectively.
- `error`: This attribute will contain the error object in case an error occurred while fetching data.

The `companyId` argument is used to specify which services to fetch, those associated with a certain company. The `ascending:false` option in the Supabase query sorts the services by their `created_at` property in descending order.
