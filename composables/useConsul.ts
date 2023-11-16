// It will be available as useFoo() (camelCase of file name without extension)
export default async function (path: Ref) {
  // return useState('foo', () => 'bar')
  const { data }  = await useFetch(
    path.value,
    {
      transform: (response) => {
        console.log('asaasssaas', response)
        return response[0].Name
      }
    }
  )

// const tr = data.value.Name
  // const { data } = await useFetch(() => path.value)
  return data
}
