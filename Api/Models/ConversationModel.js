module.exports =  {
      constructor: function(result) {
          this.id = result.id;
          this.name = `${result.firstName} ${result.lastName}`;
          this.startedAt = result.startedAt;
          this.logo = null;
          this.isActive = result.isActive;
      },

      mapConversation: function(model) {
        return {
            id: model.id,
            startedAt: model.startedAt,
            message: model.message.message,
            isSeen: model.message.isSeen,
            isDeleted: model.message.isDeleted,
            createdAt: model.message.createdAt,
            updatedAt: model.message.updatedAt
        };
      },
    fragment: function() {
          return `
            fragment UserConversation on Conversation {
                id
                startedAt
                user2 {
                    user {
                      firstName
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
      },

    fragmentConversation: function() {
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