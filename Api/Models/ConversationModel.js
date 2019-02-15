module.exports =  {
      mapConversations: function(result) {
        return {
          id: result.id,
          name: `${result.firstName} ${result.lastName}`,
          startedAt: result.startedAt,
          logo: null,
          isActive: result.isActive,
          message: result['0'].message,
          attached: result['0'].attached
        };
      },

      mapConversation: function(result) {
        return {
          id: result.id,
          name: `${result.firstName} ${result.lastName}`,
          startedAt: result.startedAt,
          logo: null,
          isActive: result.isActive,
          message: result.message[0].message,
          attached: result.message[0].attached
        };
      },

    fragment: function() {
          return `
            fragment UserConversation on Conversation {
                id
                startedAt
                createdAt

                user {
                  id,
                  firstName
                  lastName,
                  isActive
                }

                user2 {
                  id,
                  firstName
                  lastName,
                  isActive
                }

                group {
                    name
                }

                message(orderBy: createdAt_ASC first: 1) {
                    id
                    message
                    isSeen
                    isDeleted
                    createdAt
                    updatedAt
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