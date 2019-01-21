module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGroup {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserGroup {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Group {
  id: ID!
  user: User!
  users(where: UserGroupWhereInput, orderBy: UserGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserGroup!]
  name: String
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  user: UserCreateOneWithoutGroupsInput!
  users: UserGroupCreateManyWithoutGroupInput
  name: String
}

input GroupCreateManyWithoutUserInput {
  create: [GroupCreateWithoutUserInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutUsersInput {
  create: GroupCreateWithoutUsersInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutUserInput {
  users: UserGroupCreateManyWithoutGroupInput
  name: String
}

input GroupCreateWithoutUsersInput {
  user: UserCreateOneWithoutGroupsInput!
  name: String
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String
}

input GroupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  user: UserUpdateOneRequiredWithoutGroupsInput
  users: UserGroupUpdateManyWithoutGroupInput
  name: String
}

input GroupUpdateManyDataInput {
  name: String
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupUpdateManyWithoutUserInput {
  create: [GroupCreateWithoutUserInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateWithoutUserDataInput {
  users: UserGroupUpdateManyWithoutGroupInput
  name: String
}

input GroupUpdateWithWhereUniqueWithoutUserInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutUserDataInput!
}

input GroupUpsertWithWhereUniqueWithoutUserInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutUserDataInput!
  create: GroupCreateWithoutUserInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  users_every: UserGroupWhereInput
  users_some: UserGroupWhereInput
  users_none: UserGroupWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  user: User!
  user2: User!
  message: String
  attached: [String!]!
  isSeen: Boolean!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateattachedInput {
  set: [String!]
}

input MessageCreateInput {
  user: UserCreateOneWithoutSentMessagesInput!
  user2: UserCreateOneWithoutReceivedMessagesInput!
  message: String
  attached: MessageCreateattachedInput
  isSeen: Boolean
}

input MessageCreateManyWithoutUser2Input {
  create: [MessageCreateWithoutUser2Input!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutUserInput {
  create: [MessageCreateWithoutUserInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutUser2Input {
  user: UserCreateOneWithoutSentMessagesInput!
  message: String
  attached: MessageCreateattachedInput
  isSeen: Boolean
}

input MessageCreateWithoutUserInput {
  user2: UserCreateOneWithoutReceivedMessagesInput!
  message: String
  attached: MessageCreateattachedInput
  isSeen: Boolean
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  isSeen_ASC
  isSeen_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  message: String
  attached: [String!]!
  isSeen: Boolean!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  isSeen: Boolean
  isSeen_not: Boolean
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateattachedInput {
  set: [String!]
}

input MessageUpdateInput {
  user: UserUpdateOneRequiredWithoutSentMessagesInput
  user2: UserUpdateOneRequiredWithoutReceivedMessagesInput
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
}

input MessageUpdateManyDataInput {
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
}

input MessageUpdateManyMutationInput {
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
}

input MessageUpdateManyWithoutUser2Input {
  create: [MessageCreateWithoutUser2Input!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutUser2Input!]
  upsert: [MessageUpsertWithWhereUniqueWithoutUser2Input!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutUserInput {
  create: [MessageCreateWithoutUserInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutUser2DataInput {
  user: UserUpdateOneRequiredWithoutSentMessagesInput
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
}

input MessageUpdateWithoutUserDataInput {
  user2: UserUpdateOneRequiredWithoutReceivedMessagesInput
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
}

input MessageUpdateWithWhereUniqueWithoutUser2Input {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutUser2DataInput!
}

input MessageUpdateWithWhereUniqueWithoutUserInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutUserDataInput!
}

input MessageUpsertWithWhereUniqueWithoutUser2Input {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutUser2DataInput!
  create: MessageCreateWithoutUser2Input!
}

input MessageUpsertWithWhereUniqueWithoutUserInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutUserDataInput!
  create: MessageCreateWithoutUserInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  user2: UserWhereInput
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  isSeen: Boolean
  isSeen_not: Boolean
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createNotification(data: NotificationCreateInput!): Notification!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserGroup(data: UserGroupCreateInput!): UserGroup!
  deleteManyUserGroups(where: UserGroupWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Notification {
  id: ID!
  type: Int!
  title: String
  user: User!
}

type NotificationConnection {
  pageInfo: PageInfo!
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  type: Int!
  title: String
  user: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: Int!
  title: String
}

type NotificationEdge {
  node: Notification!
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  type: Int!
  title: String
}

input NotificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: Int
  type_not: Int
  type_in: [Int!]
  type_not_in: [Int!]
  type_lt: Int
  type_lte: Int
  type_gt: Int
  type_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [NotificationScalarWhereInput!]
  OR: [NotificationScalarWhereInput!]
  NOT: [NotificationScalarWhereInput!]
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
  AND: [NotificationSubscriptionWhereInput!]
  OR: [NotificationSubscriptionWhereInput!]
  NOT: [NotificationSubscriptionWhereInput!]
}

input NotificationUpdateInput {
  type: Int
  title: String
  user: UserUpdateOneRequiredWithoutNotificationsInput
}

input NotificationUpdateManyDataInput {
  type: Int
  title: String
}

input NotificationUpdateManyMutationInput {
  type: Int
  title: String
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  delete: [NotificationWhereUniqueInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [NotificationScalarWhereInput!]
  updateMany: [NotificationUpdateManyWithWhereNestedInput!]
}

input NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput!
  data: NotificationUpdateManyDataInput!
}

input NotificationUpdateWithoutUserDataInput {
  type: Int
  title: String
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: Int
  type_not: Int
  type_in: [Int!]
  type_not_in: [Int!]
  type_lt: Int
  type_lte: Int
  type_gt: Int
  type_gte: Int
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  user: UserWhereInput
  AND: [NotificationWhereInput!]
  OR: [NotificationWhereInput!]
  NOT: [NotificationWhereInput!]
}

input NotificationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  targets: String
  published: Boolean!
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  targets: String
  published: Boolean
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  targets: String
  published: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  targets_ASC
  targets_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  targets: String
  published: Boolean!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  targets: String
  targets_not: String
  targets_in: [String!]
  targets_not_in: [String!]
  targets_lt: String
  targets_lte: String
  targets_gt: String
  targets_gte: String
  targets_contains: String
  targets_not_contains: String
  targets_starts_with: String
  targets_not_starts_with: String
  targets_ends_with: String
  targets_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  targets: String
  published: Boolean
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  title: String
  targets: String
  published: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  targets: String
  published: Boolean
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  targets: String
  published: Boolean
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  targets: String
  targets_not: String
  targets_in: [String!]
  targets_not_in: [String!]
  targets_lt: String
  targets_lte: String
  targets_gt: String
  targets_gte: String
  targets_contains: String
  targets_not_contains: String
  targets_starts_with: String
  targets_not_starts_with: String
  targets_ends_with: String
  targets_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  notification(where: NotificationWhereUniqueInput!): Notification
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userGroups(where: UserGroupWhereInput, orderBy: UserGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserGroup]!
  userGroupsConnection(where: UserGroupWhereInput, orderBy: UserGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserGroupConnection!
  node(id: ID!): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userGroup(where: UserGroupSubscriptionWhereInput): UserGroupSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  username: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  sentMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receivedMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  username: String!
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutUser2Input
  groups: GroupCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGroupsInput {
  create: UserCreateWithoutGroupsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGroupsInput {
  email: String!
  password: String!
  username: String!
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutUser2Input
}

input UserCreateWithoutNotificationsInput {
  email: String!
  password: String!
  username: String!
  posts: PostCreateManyWithoutAuthorInput
  sentMessages: MessageCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutUser2Input
  groups: GroupCreateManyWithoutUserInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  username: String!
  notifications: NotificationCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutUser2Input
  groups: GroupCreateManyWithoutUserInput
}

input UserCreateWithoutReceivedMessagesInput {
  email: String!
  password: String!
  username: String!
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
  sentMessages: MessageCreateManyWithoutUserInput
  groups: GroupCreateManyWithoutUserInput
}

input UserCreateWithoutSentMessagesInput {
  email: String!
  password: String!
  username: String!
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
  receivedMessages: MessageCreateManyWithoutUser2Input
  groups: GroupCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

type UserGroup {
  user: User!
  group: Group!
}

type UserGroupConnection {
  pageInfo: PageInfo!
  edges: [UserGroupEdge]!
  aggregate: AggregateUserGroup!
}

input UserGroupCreateInput {
  user: UserCreateOneInput!
  group: GroupCreateOneWithoutUsersInput!
}

input UserGroupCreateManyWithoutGroupInput {
  create: [UserGroupCreateWithoutGroupInput!]
}

input UserGroupCreateWithoutGroupInput {
  user: UserCreateOneInput!
}

type UserGroupEdge {
  node: UserGroup!
  cursor: String!
}

enum UserGroupOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserGroupSubscriptionPayload {
  mutation: MutationType!
  node: UserGroup
  updatedFields: [String!]
}

input UserGroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserGroupWhereInput
  AND: [UserGroupSubscriptionWhereInput!]
  OR: [UserGroupSubscriptionWhereInput!]
  NOT: [UserGroupSubscriptionWhereInput!]
}

input UserGroupUpdateManyWithoutGroupInput {
  create: [UserGroupCreateWithoutGroupInput!]
}

input UserGroupWhereInput {
  user: UserWhereInput
  group: GroupWhereInput
  AND: [UserGroupWhereInput!]
  OR: [UserGroupWhereInput!]
  NOT: [UserGroupWhereInput!]
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  username_ASC
  username_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  username: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  username: String
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutUser2Input
  groups: GroupUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  username: String
}

input UserUpdateOneRequiredWithoutGroupsInput {
  create: UserCreateWithoutGroupsInput
  update: UserUpdateWithoutGroupsDataInput
  upsert: UserUpsertWithoutGroupsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutReceivedMessagesInput {
  create: UserCreateWithoutReceivedMessagesInput
  update: UserUpdateWithoutReceivedMessagesDataInput
  upsert: UserUpsertWithoutReceivedMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  update: UserUpdateWithoutSentMessagesDataInput
  upsert: UserUpsertWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGroupsDataInput {
  email: String
  password: String
  username: String
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutUser2Input
}

input UserUpdateWithoutNotificationsDataInput {
  email: String
  password: String
  username: String
  posts: PostUpdateManyWithoutAuthorInput
  sentMessages: MessageUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutUser2Input
  groups: GroupUpdateManyWithoutUserInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  username: String
  notifications: NotificationUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutUser2Input
  groups: GroupUpdateManyWithoutUserInput
}

input UserUpdateWithoutReceivedMessagesDataInput {
  email: String
  password: String
  username: String
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
  sentMessages: MessageUpdateManyWithoutUserInput
  groups: GroupUpdateManyWithoutUserInput
}

input UserUpdateWithoutSentMessagesDataInput {
  email: String
  password: String
  username: String
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
  receivedMessages: MessageUpdateManyWithoutUser2Input
  groups: GroupUpdateManyWithoutUserInput
}

input UserUpsertWithoutGroupsInput {
  update: UserUpdateWithoutGroupsDataInput!
  create: UserCreateWithoutGroupsInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutReceivedMessagesInput {
  update: UserUpdateWithoutReceivedMessagesDataInput!
  create: UserCreateWithoutReceivedMessagesInput!
}

input UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput!
  create: UserCreateWithoutSentMessagesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  sentMessages_every: MessageWhereInput
  sentMessages_some: MessageWhereInput
  sentMessages_none: MessageWhereInput
  receivedMessages_every: MessageWhereInput
  receivedMessages_some: MessageWhereInput
  receivedMessages_none: MessageWhereInput
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    