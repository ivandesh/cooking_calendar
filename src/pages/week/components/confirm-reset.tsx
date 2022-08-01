import React from 'react'
import { DialogWrapper } from '../index.styles'
import Dialog from '@mui/material/Dialog'
import { Button } from '@mui/material'

const ConfirmReset = ({
  open,
  handleClose,
  handleSuccess,
}: {
  open: boolean
  handleClose: any
  handleSuccess: any
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogWrapper>
        <h3>Почати новий тиждень</h3>
        <span className="question">?</span>
        <div className="buttons">
          <Button
            className="cancel"
            variant="contained"
            size="large"
            onClick={handleClose}
          >
            Ні
          </Button>
          <Button
            className="submit"
            variant="contained"
            size="large"
            onClick={handleSuccess}
          >
            Так
          </Button>
        </div>
      </DialogWrapper>
    </Dialog>
  )
}

export default ConfirmReset
