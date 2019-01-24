export default class ConversationModel {
      constructor(result) {
          this.id = result.id;
          this.name = `${result.firstName} ${result.lastName}`;
          this.startedAt = result.startedAt;
          this.logo = null;
          this.isActive = result.isActive;
      }

      static fragment() {
          return `
            fragment UserConversation on Conversation {
                startedAt
                user2 {
                    user {
                      id
                      firstname
                      lastName
                    }
                }

                group {
                    name
                }

                message(orderBy: createdAt_ASC first: 1) {
                    message
                    isSeen
                    createdAt
                    attached
                }
            }
          `
      }
  }