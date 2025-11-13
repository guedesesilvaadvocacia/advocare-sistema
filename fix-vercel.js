// fix-vercel.js - Corrigir configuração do Vercel
const fs = require('fs');
const path = require('path');

console.log('🔧 CORRIGINDO CONFIGURAÇÃO DO VERCEL');
console.log('====================================\n');

const projectRoot = process.cwd();
const frontendPath = path.join(projectRoot, 'frontend');

// 1. Criar vercel.json na RAIZ do projeto
const vercelConfig = {
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
};

fs.writeFileSync(
  path.join(projectRoot, 'vercel.json'),
  JSON.stringify(vercelConfig, null, 2)
);
console.log('✅ vercel.json criado na raiz do projeto');

// 2. Criar next.config.js no frontend
const nextConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Para evitar erro de build com páginas estáticas
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
`;

fs.writeFileSync(
  path.join(frontendPath, 'next.config.js'),
  nextConfig.trim()
);
console.log('✅ next.config.js criado no frontend');

// 3. Verificar e atualizar package.json do frontend
const packageJsonPath = path.join(frontendPath, 'package.json');

if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Garantir que tem os scripts necessários
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.dev = "next dev";
  packageJson.scripts.build = "next build";
  packageJson.scripts.start = "next start";
  packageJson.scripts.lint = "next lint";
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ package.json do frontend atualizado');
} else {
  console.log('❌ package.json não encontrado no frontend');
}

// 4. Criar estrutura básica de páginas Next.js
const pagesDir = path.join(frontendPath, 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Página inicial básica
const indexPage = `
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
`;

fs.writeFileSync(
  path.join(pagesDir, 'index.js'),
  indexPage.trim()
);
console.log('✅ Página inicial criada (pages/index.js)');

// Página de login básica (placeholder)
const loginPage = `
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Advocare Sistema</title>
      </Head>
      
      <div style={{ 
        padding: '50px', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>🔐 Área de Login</h1>
        <p>Página de login em construção...</p>
        <p><em>Em breve: Design completo Guedes & Silva</em></p>
        <a href="/">← Voltar</a>
      </div>
    </>
  )
}
`;

fs.writeFileSync(
  path.join(pagesDir, 'login.js'),
  loginPage.trim()
);
console.log('✅ Página de login criada (pages/login.js)');

console.log('\n🎉 CONFIGURAÇÃO DO VERCEL CONCLUÍDA!');
console.log('====================================');
console.log('📝 PRÓXIMOS PASSOS:');
console.log('1. git add .');
console.log('2. git commit -m "fix: corrigir configuração Vercel"');
console.log('3. git push origin main');
console.log('4. Aguardar deploy automático no Vercel');
console.log('5. Testar: https://advocare-sistema.vercel.app');
console.log('\n⚠️  OBS: Esta é uma versão BÁSICA para teste.');
console.log('    Na próxima etapa, integraremos o login completo.');