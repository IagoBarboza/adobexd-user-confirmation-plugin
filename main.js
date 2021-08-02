const { confirm } = require('./lib/dialogs')

const showConfirm = async () => {
  const feedback = await confirm(
    "Enable Smart Filters?",
    "Smart filters are nondestructive and will preserve your original images",
    ["Cancel", "Enable"]
  )

  switch (feedback.which) {
    case 0:
      // User canceled
      break;
    case 1:
      // User clicked Enable
      break;
  }
}

module.exports = {
  commands: {
    showConfirm
  }
}