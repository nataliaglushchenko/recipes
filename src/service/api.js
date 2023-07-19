import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';

import { transformRecipesPreview } from './transformRecipesPreview';
import { transformRecipeDetails } from './transformRecipeDetails';
import { graphqlBaseQuery } from './config';
import { spaceId, token } from './credentials';

export const api = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: `https://graphql.contentful.com/content/v1/spaces/${spaceId}?access_token=${token}`,
  }),
  reducerPath: 'api',
  endpoints: (build) => ({
    getRecipes: build.query({
      query: () => ({
        body: gql`
          query {
            recipeCollection {
              items {
                sys {
                  id
                }
                title
                photo {
                  url
                }
              }
            }
          }
        `,
      }),
      transformResponse: transformRecipesPreview
    }),
    getRecipeDetails: build.query({
      query: (id) => ({
        body: gql`
          query {
            recipeCollection(where: { sys: { id: "${id}" } }) {
              items {
                sys {
                  id
                }
                title
                photo {
                  url
                }
                chef {
                  name
                }
                description
                tagsCollection {
                  items {
                    name
                    sys {
                      id
                    }
                  }
                }
              }
            }
          }
        `,
      }),
      transformResponse: transformRecipeDetails
    })
  }),
});

export const { useGetRecipesQuery, useGetRecipeDetailsQuery } = api;
