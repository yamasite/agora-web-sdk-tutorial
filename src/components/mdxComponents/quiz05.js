import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "如何通过 SDK 发送媒体流？",
        "questionType": "text",
        "answers": [
          "AgoraRTC.publish",
          "AgoraRTCClient.join",
          "AgoraRTCClient.publish"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "如何通过 SDK 接收媒体流？",
        "questionType": "text",
        "answers": [
            "通过 \"user-published\" 事件，调用 subscribe 订阅发流的远端用户",
            "通过 \"user-joined\" 事件，调用 subscribe 订阅发流的远端用户",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "如何通过 SDK 播放接收的媒体流？",
        "questionType": "text",
        "answers": [
            "通过 subscribe 获取远端用户的视频轨道后，调用 play 进行播放",
            "通过 join 获取远端用户的视频轨道后，调用 play 进行播放",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },
    ]
  }

const quiz05 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz05;