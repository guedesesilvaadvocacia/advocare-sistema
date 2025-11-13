import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Advocare Sistema - Guedes & Silva</title>
        <meta name="description" content="Sistema de gestão advocatícia" />
      </Head>
      
      <div style={{ 
        padding: '50px', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>🚀 Advocare Sistema</h1>
        <p><strong>Guedes & Silva Advogados</strong></p>
        <p>Sistema de gestão advocatícia</p>
        <div style={{ marginTop: '30px' }}>
          <a 
            href="/login" 
            style={{
              padding: '10px 20px',
              background: '#1a2a6c',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px'
            }}
          >
            Acessar Sistema
          </a>
        </div>
      </div>
    </>
  )
}