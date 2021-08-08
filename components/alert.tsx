type Props = {
  preview?: boolean
}

const PreviewMessage = (preview: boolean) => {
  if (preview) {
    return (
      <div>This is preview</div>
    )
  }
}

const Alert = ({preview}: Props) => {
  return (
    <div>
      {PreviewMessage(preview)}
    </div>
  )
}

export default Alert