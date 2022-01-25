import { CopyOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import copy from 'copy-to-clipboard'

import { useShare } from 'shared/lib'

type Props = Omit<
  Exclude<Parameters<typeof navigator.share>[0], undefined>,
  `files`
>

export const ShareOrCopy = (props: Props) => {
  const { url } = props

  const { isAvailable, handleShare } = useShare()

  return isAvailable ? (
    <Button
      icon={<ShareAltOutlined />}
      size='middle'
      type='primary'
      onClick={() => handleShare(props)}
    />
  ) : (
    <Tooltip title='Ссылка скопирована' trigger='click'>
      <Button
        icon={<CopyOutlined />}
        size='middle'
        type='primary'
        onClick={() => url && copy(url)}
      />
    </Tooltip>
  )
}
