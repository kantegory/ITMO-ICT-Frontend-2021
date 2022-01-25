// TODO переделать весь компонент господи какой же это кал

import { Upload } from 'antd'
import { UploadChangeParam } from 'antd/es/upload'
import {
  ComponentProps,
  useCallback,
  useMemo,
} from 'react'

import { api, baseURL } from 'shared/api'

interface Props {
  value?: (Components.Schemas.File | string)[]
  onChange?: (value: string[]) => void
}

export const Attachments = ({ value, onChange }: Props) => {
  const handleStartFileUpload = (file: File) => {
    return { file, name: file.name }
  }

  const handleChange = useCallback<
    (
      event: Pick<
        Parameters<
          Exclude<ComponentProps<typeof Upload>[`onChange`], undefined>
        >[0],
        `fileList` | `file`
      >,
    ) => void
  >(
    (params: UploadChangeParam) => {
      const { file, fileList } = params
      if (file.response && onChange)
        onChange(fileList.map((file) => file.response?.id))
    },
    [onChange],
  )

  const fileList = useMemo(
    () =>
      value?.map((item) =>
        typeof item === `string`
          ? {
              uid: item,
              status: `done` as `done`,
              name: item,
              url: item,
              response: { file: item },
              size: 0,
              type: ``,
            }
          : {
              uid: item?.file,
              status: `done` as `done`,
              name: item?.file,
              url: item?.file,
              response: item,
              size: 0,
              type: ``,
            },
      ),
    [value],
  )

  return (
    <Upload
      action={`${baseURL}/files`}
      data={handleStartFileUpload}
      defaultFileList={fileList}
      headers={{
        Authorization: api.defaults.headers.common.Authorization,
      }}
      listType='picture-card'
      onChange={handleChange}
    >
      {onChange && `Загрузить`}
    </Upload>
  )
}
