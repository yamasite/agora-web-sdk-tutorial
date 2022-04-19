import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "声网实时音视频 Web SDK 如何在通话中识别对方？",
        "questionType": "text",
        "answers": [
          "通过用户名",
          "通过频道名和用户名",
          "通过频道名",
          "通过 App ID",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "在哪里可以配置 SDK 的编码属性？",
        "questionType": "text",
        "answers": [
            "AgoraRTC.createClient",
            "client.join",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "声网的 AgoraRTCClient 类继承了 Node.js 的哪个类？",
        "questionType": "text",
        "answers": [
            "Blob 类",
            "EventEmitter 类",
            "V8 类",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "用什么方法可以连接 SDK 的传输通道？",
        "questionType": "text",
        "answers": [
            "AgoraRTC.createClient",
            "AgoraRTCClient.join",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "连接声网传输通道需要什么信息？",
        "questionType": "text",
        "answers": [
            "App ID",
            "频道名",
            "用户 ID",
            "以上三个都需要",
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "连接声网传输通道之后，如何监听频道事件？",
        "questionType": "text",
        "answers": [
            "AgoraRTCClient.on(eventName, listener)",
            "AgoraRTC.on(eventName, listener)",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },


    ]
  }

const quiz04 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz04;

