import {
    resolveCreate,
    resolveDelete,
    resolveGet,
    resolveList,
    resolveUpdate
} from "@webiny/commodo-graphql";
import { hasScope } from "@webiny/api-security";

const contentModelGroupFetcher = ctx => ctx.models.CmsContentModelGroup;

export default {
    getTypeDefs(type) {
        let output = /* GraphQL */ `
            type CmsContentModelGroup {
                id: ID
                createdOn: DateTime
                name: String
                contentModels: [CmsContentModel]
                totalContentModels: Int
                slug: String
                description: String
                icon: String
            }
        `;

        if (type === "manage") {
            output += /* GraphQL */ `
                input CmsContentModelGroupInput {
                    name: String
                    slug: String
                    description: String
                    icon: String
                }

                type CmsContentModelGroupResponse {
                    data: CmsContentModelGroup
                    error: CmsError
                }

                type CmsContentModelGroupListResponse {
                    data: [CmsContentModelGroup]
                    meta: CmsListMeta
                    error: CmsError
                }

                extend type Query {
                    getContentModelGroup(
                        id: ID
                        where: JSON
                        sort: String
                    ): CmsContentModelGroupResponse

                    listContentModelGroups(
                        where: JSON
                        sort: JSON
                        search: CmsSearchInput
                        limit: Int
                        after: String
                        before: String
                    ): CmsContentModelGroupListResponse
                }

                extend type Mutation {
                    createContentModelGroup(
                        data: CmsContentModelGroupInput!
                    ): CmsContentModelGroupResponse

                    updateContentModelGroup(
                        id: ID!
                        data: CmsContentModelGroupInput!
                    ): CmsContentModelGroupResponse

                    deleteContentModelGroup(id: ID!): CmsDeleteResponse
                }
            `;
        }

        return output;
    },

    getResolvers(type) {
        if (type !== "manage") {
            return {};
        }

        return {
            Query: {
                getContentModelGroup: resolveGet(contentModelGroupFetcher),
                listContentModelGroups: resolveList(contentModelGroupFetcher)
            },
            Mutation: {
                createContentModelGroup: resolveCreate(contentModelGroupFetcher),
                updateContentModelGroup: resolveUpdate(contentModelGroupFetcher),
                deleteContentModelGroup: resolveDelete(contentModelGroupFetcher)
            }
        };
    },
    getSecurity(type) {
        if (type !== "manage") {
            return {};
        }

        return {
            shield: {
                Query: {
                    getContentModel: hasScope("cms:contentModelGroup:crud"),
                    listContentModels: hasScope("cms:contentModelGroup:crud")
                },
                Mutation: {
                    createContentModel: hasScope("cms:contentModelGroup:crud"),
                    updateContentModel: hasScope("cms:contentModelGroup:crud"),
                    deleteContentModel: hasScope("cms:contentModelGroup:crud")
                }
            }
        };
    }
};
