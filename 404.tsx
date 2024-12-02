// pages/404.js
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error 404",
  description: "Infelizmente não foi possível encontrar essa página!",
};

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* GIF adicionado aqui */}
      <img 
        src="/404.gif" 
        alt="Erro 404" 
        className="w-72 mb-6" 
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Página não encontrada</h1>
      <p className="text-lg text-gray-600 mb-6">Ops! A página que você está procurando não existe, ou foi excluida! 😕</p>
      <Link href="/">
        <button className="text-lg bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
  Voltar Para o Início
</button>
      </Link>
    </div>
  );
};

export default Custom404;