export default {
  methods: {
    handleAddValues (inputValue) {
      this.addValue(inputValue)
    },
    async handleClickEditValue ({ itemId, isEditing }) {
      if (!isEditing) await this.timeout(200);
      [ ...this.items ].map(item => {
        if (item.id === itemId) {
          item.isEditing = isEditing
        }

        return item
      })
    },
    handleConfirmEdit ({ itemId, value }) {
      if (!this.handleEditValidation(itemId, value)) return
      this.toggleModal({
        show: true,
        title: this.message.update.TITLE,
        description: this.message.update.DESCRIPTION,
        buttonText: this.message.update.BUTTON_TEXT,
        buttonAction: async () => {
          await this.handleUpdateValueFromFirestore(itemId, value)
        }
      })
    },
    handleEditValidation (itemId, value) {
      if (value !== '') return true;
      [ ...this.items ].map(item => {
        if (item.id === itemId) {
          item.isEditing = false
        }

        return item
      })

      return false
    },
    handleConfirmRemoveValue (id) {
      this.toggleModal({
        show: true,
        title: this.message.delete.TITLE,
        description: this.message.delete.DESCRIPTION,
        buttonText: this.message.delete.BUTTON_TEXT,
        buttonAction: async () => {
          await this.handleDeleteValueFromFirestore(id)
        }
      })
    },
    async handleDeleteValueFromFirestore (id) {
      try {
        await this.removeValue(id)
        this.toggleModal(false)
      } catch (_) {
        alert(this.message.delete.FAILED)
      }
    },
    async handleUpdateValueFromFirestore (itemId, value) {
      try {
        await this.updateValue({
          id: itemId,
          name: value
        })
        this.toggleModal(false)
      } catch (_) {
        alert(this.message.update.FAILED)
      }
    }
  }
}