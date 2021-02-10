const micro = require('micro'),
      replies = require('./replies')
const users = [{
        name:'Петя Иванов',
        disabled:false
    },
    {
        name:'Вася Петров',
        disabled:true
    }]
const server = micro(async (req, res) => {
        if (req.method !== 'POST') {
          return 'Server is running'
        }
      
        const { request, session, state } = await micro.json(req),
              sessionState = state && state.session || {}
        const response = session.new
          ? replies.welcome()
          : replies.authQuestion()
      
        return {
          response,
          session_state: sessionState,
          version: '1.0'
        }
      })

function checkAnswer(sessionState, command) {
    let step = sessionState.step
    if (!step) {
        return replies.authQuestion(question)
      }
    if (/отмена/i.test(command)) {
        
        return replies.authQuestion()
      }
      return replies.unknownUser()
      }

const PORT = 3000;
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}, tunnel: http://localhost:3000`));