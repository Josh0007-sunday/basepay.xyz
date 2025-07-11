import './App.css';
import {  CheckCircle,  DollarSign, Zap, ChevronRight, Globe, Shield } from 'lucide-react';

import usdcLogo from './assets/usd-coin-usdc-logo.png'
import dashboardImg from './assets/dashboard.png';
import baseLogo from './assets/base.webp';
import createInvoiceImg from './assets/create_invoice.png';
import invoicePayImg from './assets/invoice_pay.png';
import recentImg from './assets/recent.png';
import codeBlockImg from './assets/code-block.png';

function App() {
  return (
    <div className="app font-sans bg-white text-black">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">basepay<span className="font-normal">.</span></span>
          </div>
          <ul className="hidden md:flex flex-row space-x-8 text-base font-medium">
            <li><a href="#" className="hover:text-gray-600 transition-colors">DAO</a></li>
            <li><a href="#" className="hover:text-gray-600 transition-colors">SDK</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-sm px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100">EN</button>
            <button className="bg-black text-white px-5 py-2 rounded font-medium hover:bg-gray-800 transition-colors">Launch dapp</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col items-center text-center py-16 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">basepay.<span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-3 sm:mt-6">the infrastructure for banking freedom.</span></h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Empowering financial transactions with seamless, secure, and intelligent banking infrastructure.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="https://diagnostic-middle-7f6.notion.site/BasePay-Core-BaseBatch-Africa-1f3c7e25ebf280c58229db35a87bd23f?pvs=74" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors text-center">Read docs</a>
          <button className="border border-gray-300 bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">Launch dapp</button>
        </div>
        {/* Dashboard/Image Placeholder */}
        <div className="w-full flex justify-center mb-8">
          <img src={dashboardImg} alt="Dashboard Screenshot" className="max-w-full max-h-[500px] rounded-lg border border-gray-200 shadow-sm" />
        </div>
      </section>

      {/* Trusted By / Partners Section */}
      <section className="bg-white py-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8">Trusted infrastructure</h1>
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-16">
          <div className="flex flex-col items-center">
            <img src={baseLogo} alt="Base Logo" className="h-12 w-auto object-contain mb-2" />
            <span className="text-base font-medium text-gray-800">Base</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={usdcLogo} alt="USDC Logo" className="h-12 w-auto object-contain mb-2" />
            <span className="text-base font-medium text-gray-800">USDC</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">Why Basepay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg bg-white text-center">
            <h3 className="font-bold text-xl mb-2">Modern HRIS</h3>
            <p className="text-gray-700">All-in-one platform for payroll, benefits, and more.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white text-center">
            <h3 className="font-bold text-xl mb-2">Automated Payroll</h3>
            <p className="text-gray-700">Run payroll in minutes, not hours, with full compliance.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white text-center">
            <h3 className="font-bold text-xl mb-2">Employee Self-Service</h3>
            <p className="text-gray-700">Empower your team with easy access to their info.</p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">How it works</h2>
          
          {/* Step 1: Connect Wallet */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img src={dashboardImg} alt="Dashboard" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">1. Connect your wallet with basepay</h3>
              <p className="text-gray-700 text-lg">Start by connecting your wallet to the basepay platform to access our comprehensive banking infrastructure.</p>
            </div>
          </div>

          {/* Step 2: Create Invoice */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img src={createInvoiceImg} alt="Create Invoice" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">2. Create and manage invoices</h3>
              <p className="text-gray-700 text-lg">Generate professional invoices with our intuitive interface. Set amounts, add descriptions, and track payment status.</p>
            </div>
          </div>

          {/* Step 3: Pay Invoice */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img src={invoicePayImg} alt="Pay Invoice" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">3. Process payments seamlessly</h3>
              <p className="text-gray-700 text-lg">Complete transactions with our secure payment processing. Support for multiple payment methods and instant confirmations.</p>
            </div>
          </div>

          {/* Step 4: Recent Activity */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img src={recentImg} alt="Recent Activity" className="w-full max-w-xl mx-auto rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">4. Track your recent activity</h3>
              <p className="text-gray-700 text-lg">Monitor all your transactions, invoices, and payment history in real-time with our comprehensive dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate our SDK Section */}
      <section className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">Integrate our SDK</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src={codeBlockImg} alt="Code Block" className="w-full max-w-xl mx-auto rounded-lg shadow-sm" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">Get started in minutes</h3>
              <p className="text-gray-700 text-lg mb-6">Install our SDK and start building with basepay's infrastructure. Simple, secure, and developer-friendly.</p>
              <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
                npm i basepaysdk-core
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-8 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tight">basepay.</span>
            <div className="text-gray-400 mt-2 text-sm">&copy; {new Date().getFullYear()} Basepay Inc. All rights reserved.</div>
          </div>
          <ul className="flex flex-wrap gap-6 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Product</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Customers</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;