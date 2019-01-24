export default class ConversationModel {
      constructor(result) {
          this.id = result.id;
          this.name = `${result.firstName} ${result.lastName}`;
          this.startedAt = result.startedAt;
          this.logo = null;
          this.isActive = result.isActive;
      }

      static mapConversation(model) {
        return {
            id: model.id,
            startedAt: model.startedAt,
            message: model.message.message,
            isSeen: model.message.isSeen,
            isDeleted: model.message.isDeleted,
            createdAt: model.message.createdAt,
            updatedAt: model.message.updatedAt
        };
      }
    
      static fragment() {
          return `
            fragment UserConversation on Conversation {
                id
                startedAt
                user2 {
                    user {
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

      static fragmentConversation() {
          return `
          fragment UserConversation on Conversation {
            id
            startedAt

            message {
              id
              message
              isSeen
              isDeleted
              createdAt
              updatedAt
            }
          }
        `
      }
  }