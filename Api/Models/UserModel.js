module.exports =  {
    fragment: function() {
          return `
            fragment UserConversation on User {
              id,
              fullName,
              isActive,
              currentConversationId
            }
          `
      }
  }