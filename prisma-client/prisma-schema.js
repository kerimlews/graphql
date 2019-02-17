module.exports = {
        typeDefs: /* GraphQL */ `type AggregateConversation {
  count: Int!
}

type AggregateGroup {
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

type BatchPayload {
  count: Long!
}

type Conversation {
  id: ID!
  user: User!
  group: Group
  user2: User!
  message(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  startedAt: DateTime!
  createdAt: DateTime!
}

type ConversationConnection {
  pageInfo: PageInfo!
  edges: [ConversationEdge]!
  aggregate: AggregateConversation!
}

input ConversationCreateInput {
  user: UserCreateOneInput!
  group: GroupCreateOneWithoutConversationInput
  user2: UserCreateOneWithoutConversationInput!
  message: MessageCreateManyWithoutConversationInput
  startedAt: DateTime!
}

input ConversationCreateManyWithoutGroupInput {
  create: [ConversationCreateWithoutGroupInput!]
  connect: [ConversationWhereUniqueInput!]
}

input ConversationCreateManyWithoutUser2Input {
  create: [ConversationCreateWithoutUser2Input!]
  connect: [ConversationWhereUniqueInput!]
}

input ConversationCreateOneWithoutMessageInput {
  create: ConversationCreateWithoutMessageInput
  connect: ConversationWhereUniqueInput
}

input ConversationCreateWithoutGroupInput {
  user: UserCreateOneInput!
  user2: UserCreateOneWithoutConversationInput!
  message: MessageCreateManyWithoutConversationInput
  startedAt: DateTime!
}

input ConversationCreateWithoutMessageInput {
  user: UserCreateOneInput!
  group: GroupCreateOneWithoutConversationInput
  user2: UserCreateOneWithoutConversationInput!
  startedAt: DateTime!
}

input ConversationCreateWithoutUser2Input {
  user: UserCreateOneInput!
  group: GroupCreateOneWithoutConversationInput
  message: MessageCreateManyWithoutConversationInput
  startedAt: DateTime!
}

type ConversationEdge {
  node: Conversation!
  cursor: String!
}

enum ConversationOrderByInput {
  id_ASC
  id_DESC
  startedAt_ASC
  startedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ConversationPreviousValues {
  id: ID!
  startedAt: DateTime!
  createdAt: DateTime!
}

input ConversationScalarWhereInput {
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
  startedAt: DateTime
  startedAt_not: DateTime
  startedAt_in: [DateTime!]
  startedAt_not_in: [DateTime!]
  startedAt_lt: DateTime
  startedAt_lte: DateTime
  startedAt_gt: DateTime
  startedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ConversationScalarWhereInput!]
  OR: [ConversationScalarWhereInput!]
  NOT: [ConversationScalarWhereInput!]
}

type ConversationSubscriptionPayload {
  mutation: MutationType!
  node: Conversation
  updatedFields: [String!]
  previousValues: ConversationPreviousValues
}

input ConversationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConversationWhereInput
  AND: [ConversationSubscriptionWhereInput!]
  OR: [ConversationSubscriptionWhereInput!]
  NOT: [ConversationSubscriptionWhereInput!]
}

input ConversationUpdateInput {
  user: UserUpdateOneRequiredInput
  group: GroupUpdateOneWithoutConversationInput
  user2: UserUpdateOneRequiredWithoutConversationInput
  message: MessageUpdateManyWithoutConversationInput
  startedAt: DateTime
}

input ConversationUpdateManyDataInput {
  startedAt: DateTime
}

input ConversationUpdateManyMutationInput {
  startedAt: DateTime
}

input ConversationUpdateManyWithoutGroupInput {
  create: [ConversationCreateWithoutGroupInput!]
  delete: [ConversationWhereUniqueInput!]
  connect: [ConversationWhereUniqueInput!]
  disconnect: [ConversationWhereUniqueInput!]
  update: [ConversationUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ConversationUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [ConversationScalarWhereInput!]
  updateMany: [ConversationUpdateManyWithWhereNestedInput!]
}

input ConversationUpdateManyWithoutUser2Input {
  create: [ConversationCreateWithoutUser2Input!]
  delete: [ConversationWhereUniqueInput!]
  connect: [ConversationWhereUniqueInput!]
  disconnect: [ConversationWhereUniqueInput!]
  update: [ConversationUpdateWithWhereUniqueWithoutUser2Input!]
  upsert: [ConversationUpsertWithWhereUniqueWithoutUser2Input!]
  deleteMany: [ConversationScalarWhereInput!]
  updateMany: [ConversationUpdateManyWithWhereNestedInput!]
}

input ConversationUpdateManyWithWhereNestedInput {
  where: ConversationScalarWhereInput!
  data: ConversationUpdateManyDataInput!
}

input ConversationUpdateOneRequiredWithoutMessageInput {
  create: ConversationCreateWithoutMessageInput
  update: ConversationUpdateWithoutMessageDataInput
  upsert: ConversationUpsertWithoutMessageInput
  connect: ConversationWhereUniqueInput
}

input ConversationUpdateWithoutGroupDataInput {
  user: UserUpdateOneRequiredInput
  user2: UserUpdateOneRequiredWithoutConversationInput
  message: MessageUpdateManyWithoutConversationInput
  startedAt: DateTime
}

input ConversationUpdateWithoutMessageDataInput {
  user: UserUpdateOneRequiredInput
  group: GroupUpdateOneWithoutConversationInput
  user2: UserUpdateOneRequiredWithoutConversationInput
  startedAt: DateTime
}

input ConversationUpdateWithoutUser2DataInput {
  user: UserUpdateOneRequiredInput
  group: GroupUpdateOneWithoutConversationInput
  message: MessageUpdateManyWithoutConversationInput
  startedAt: DateTime
}

input ConversationUpdateWithWhereUniqueWithoutGroupInput {
  where: ConversationWhereUniqueInput!
  data: ConversationUpdateWithoutGroupDataInput!
}

input ConversationUpdateWithWhereUniqueWithoutUser2Input {
  where: ConversationWhereUniqueInput!
  data: ConversationUpdateWithoutUser2DataInput!
}

input ConversationUpsertWithoutMessageInput {
  update: ConversationUpdateWithoutMessageDataInput!
  create: ConversationCreateWithoutMessageInput!
}

input ConversationUpsertWithWhereUniqueWithoutGroupInput {
  where: ConversationWhereUniqueInput!
  update: ConversationUpdateWithoutGroupDataInput!
  create: ConversationCreateWithoutGroupInput!
}

input ConversationUpsertWithWhereUniqueWithoutUser2Input {
  where: ConversationWhereUniqueInput!
  update: ConversationUpdateWithoutUser2DataInput!
  create: ConversationCreateWithoutUser2Input!
}

input ConversationWhereInput {
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
  group: GroupWhereInput
  user2: UserWhereInput
  message_every: MessageWhereInput
  message_some: MessageWhereInput
  message_none: MessageWhereInput
  startedAt: DateTime
  startedAt_not: DateTime
  startedAt_in: [DateTime!]
  startedAt_not_in: [DateTime!]
  startedAt_lt: DateTime
  startedAt_lte: DateTime
  startedAt_gt: DateTime
  startedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ConversationWhereInput!]
  OR: [ConversationWhereInput!]
  NOT: [ConversationWhereInput!]
}

input ConversationWhereUniqueInput {
  id: ID
}

scalar DateTime

type Group {
  id: ID!
  name: String
  conversation(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conversation!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String
  conversation: ConversationCreateManyWithoutGroupInput
}

input GroupCreateOneWithoutConversationInput {
  create: GroupCreateWithoutConversationInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutConversationInput {
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
  name: String
  conversation: ConversationUpdateManyWithoutGroupInput
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupUpdateOneWithoutConversationInput {
  create: GroupCreateWithoutConversationInput
  update: GroupUpdateWithoutConversationDataInput
  upsert: GroupUpsertWithoutConversationInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutConversationDataInput {
  name: String
}

input GroupUpsertWithoutConversationInput {
  update: GroupUpdateWithoutConversationDataInput!
  create: GroupCreateWithoutConversationInput!
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
  conversation_every: ConversationWhereInput
  conversation_some: ConversationWhereInput
  conversation_none: ConversationWhereInput
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
  message: String
  attached: [String!]!
  isSeen: Boolean!
  isDeleted: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  conversation: Conversation!
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
  message: String
  attached: MessageCreateattachedInput
  isSeen: Boolean
  isDeleted: Boolean
  conversation: ConversationCreateOneWithoutMessageInput!
}

input MessageCreateManyWithoutConversationInput {
  create: [MessageCreateWithoutConversationInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutConversationInput {
  message: String
  attached: MessageCreateattachedInput
  isSeen: Boolean
  isDeleted: Boolean
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
  isDeleted_ASC
  isDeleted_DESC
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
  isDeleted: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  isDeleted: Boolean
  isDeleted_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
  isDeleted: Boolean
  conversation: ConversationUpdateOneRequiredWithoutMessageInput
}

input MessageUpdateManyDataInput {
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
  isDeleted: Boolean
}

input MessageUpdateManyMutationInput {
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
  isDeleted: Boolean
}

input MessageUpdateManyWithoutConversationInput {
  create: [MessageCreateWithoutConversationInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutConversationInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutConversationInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutConversationDataInput {
  message: String
  attached: MessageUpdateattachedInput
  isSeen: Boolean
  isDeleted: Boolean
}

input MessageUpdateWithWhereUniqueWithoutConversationInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutConversationDataInput!
}

input MessageUpsertWithWhereUniqueWithoutConversationInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutConversationDataInput!
  create: MessageCreateWithoutConversationInput!
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
  isDeleted: Boolean
  isDeleted_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  conversation: ConversationWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createConversation(data: ConversationCreateInput!): Conversation!
  updateConversation(data: ConversationUpdateInput!, where: ConversationWhereUniqueInput!): Conversation
  updateManyConversations(data: ConversationUpdateManyMutationInput!, where: ConversationWhereInput): BatchPayload!
  upsertConversation(where: ConversationWhereUniqueInput!, create: ConversationCreateInput!, update: ConversationUpdateInput!): Conversation!
  deleteConversation(where: ConversationWhereUniqueInput!): Conversation
  deleteManyConversations(where: ConversationWhereInput): BatchPayload!
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
  conversation(where: ConversationWhereUniqueInput!): Conversation
  conversations(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conversation]!
  conversationsConnection(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConversationConnection!
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
  node(id: ID!): Node
}

type Subscription {
  conversation(where: ConversationSubscriptionWhereInput): ConversationSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  username: String!
  isActive: Boolean!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  conversation(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conversation!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  username: String!
  isActive: Boolean
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
  conversation: ConversationCreateManyWithoutUser2Input
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutConversationInput {
  create: UserCreateWithoutConversationInput
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

input UserCreateWithoutConversationInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  username: String!
  isActive: Boolean
  posts: PostCreateManyWithoutAuthorInput
  notifications: NotificationCreateManyWithoutUserInput
}

input UserCreateWithoutNotificationsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  username: String!
  isActive: Boolean
  posts: PostCreateManyWithoutAuthorInput
  conversation: ConversationCreateManyWithoutUser2Input
}

input UserCreateWithoutPostsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  username: String!
  isActive: Boolean
  notifications: NotificationCreateManyWithoutUserInput
  conversation: ConversationCreateManyWithoutUser2Input
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  username_ASC
  username_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  username: String!
  isActive: Boolean!
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

input UserUpdateDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  username: String
  isActive: Boolean
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
  conversation: ConversationUpdateManyWithoutUser2Input
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  username: String
  isActive: Boolean
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
  conversation: ConversationUpdateManyWithoutUser2Input
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  password: String
  username: String
  isActive: Boolean
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutConversationInput {
  create: UserCreateWithoutConversationInput
  update: UserUpdateWithoutConversationDataInput
  upsert: UserUpsertWithoutConversationInput
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

input UserUpdateWithoutConversationDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  username: String
  isActive: Boolean
  posts: PostUpdateManyWithoutAuthorInput
  notifications: NotificationUpdateManyWithoutUserInput
}

input UserUpdateWithoutNotificationsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  username: String
  isActive: Boolean
  posts: PostUpdateManyWithoutAuthorInput
  conversation: ConversationUpdateManyWithoutUser2Input
}

input UserUpdateWithoutPostsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  username: String
  isActive: Boolean
  notifications: NotificationUpdateManyWithoutUserInput
  conversation: ConversationUpdateManyWithoutUser2Input
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutConversationInput {
  update: UserUpdateWithoutConversationDataInput!
  create: UserCreateWithoutConversationInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
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
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
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
  isActive: Boolean
  isActive_not: Boolean
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  conversation_every: ConversationWhereInput
  conversation_some: ConversationWhereInput
  conversation_none: ConversationWhereInput
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
    