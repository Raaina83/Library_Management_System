import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api/v1/'}),
    tagTypes: ["User", "Librarian"],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => ({
                url: '/user/books',
                credentials: 'include',
            }),
            providesTags: ["User"]
        }),
        getIssuedBooks: builder.query({
            query: () => ({
                url: '/user/books/issued',
                credentials: 'include',
            }),
            providesTags: ["User"],
        }),
        sendRequests: builder.mutation({
            query: (data) => ({
                url: '/user/requests',
                method: 'PUT',
                credentials: 'include',
                body: data
            }),
            invalidatesTags: ["User"]
        }),

    })
})

export default api;