import tl = require('azure-pipelines-task-lib/task');

async function run1() {
    try {
        const inputString: string | undefined = tl.getInput('samplestring', true);
        if (inputString == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Hello', inputString);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run1();


import taskLib = require('azure-pipelines-task-lib');

async function run() {
  try {
    const inputString: string | undefined = taskLib.getInput('samblestring', true)
    if (inputString == 'bad') {
      taskLib.setResult(taskLib.TaskResult.Failed, 'Bad input was given');
      return;
    }
    console.log('Hello', inputString);
  } catch (err) {
    taskLib.setResult(taskLib.TaskResult.Failed, err.message);
  }
}