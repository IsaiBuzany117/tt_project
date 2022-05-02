import { Html, Head, Main, NextScript } from 'next/document'

const _document = () => {
    return (
        <Html lang='es'>
            <Head />
            <body className='bg-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default _document