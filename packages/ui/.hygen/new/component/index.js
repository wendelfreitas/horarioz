module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?'
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const {  component_name } = answers
        const path = `${component_name}`
        const absPath = `src/components/${component_name}`
        return { ...answers, path, absPath }
      })
  }
}
