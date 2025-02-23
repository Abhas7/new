function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-8 text-xs">
          <div className="flex items-center gap-2">
            <span>Hi!</span>
            <a href="#" className="text-[#3665F3] hover:underline">Sign in</a>
            <span>or</span>
            <a href="#" className="text-[#3665F3] hover:underline">register</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Daily Deals</a>
            <a href="#" className="hover:underline">Brand Outlet</a>
            <a href="#" className="hover:underline">Gift Cards</a>
            <a href="#" className="hover:underline">Help & Contact</a>
            <a href="#" className="hover:underline">Sell</a>
            <div className="flex items-center gap-1">
              <a href="#" className="hover:underline">Watchlist</a>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="hover:underline">My eBay</a>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <button className="hover:text-gray-600">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </button>
            <button className="hover:text-gray-600">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Logo and Title */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <a href="#" className="flex-shrink-0">
              <svg className="w-28" viewBox="0 0 120 48">
                <path d="M38.188 13.708h-8.29a.876.876 0 0 0-.873.873v21.392c0 .481.391.873.873.873h8.29a.876.876 0 0 0 .873-.873V14.581a.876.876 0 0 0-.873-.873" fill="#E53238"/>
                <path d="M67.426 13.708h-8.29a.876.876 0 0 0-.873.873v21.392c0 .481.391.873.873.873h8.29a.876.876 0 0 0 .873-.873V14.581a.876.876 0 0 0-.873-.873" fill="#0064D2"/>
                <path d="M53.141 13.708h-8.29a.876.876 0 0 0-.873.873v21.392c0 .481.391.873.873.873h8.29a.876.876 0 0 0 .873-.873V14.581a.876.876 0 0 0-.873-.873" fill="#F5AF02"/>
                <path d="M82.455 13.708h-8.29a.876.876 0 0 0-.873.873v21.392c0 .481.391.873.873.873h8.29a.876.876 0 0 0 .873-.873V14.581a.876.876 0 0 0-.873-.873" fill="#86B817"/>
              </svg>
            </a>
            <h1 className="text-2xl">Customer Service</h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-[#3665F3] hover:underline">Home</a>
            <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-gray-600">Customer Service</span>
          </div>
        </div>
      </div>

      

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Suggestions for you</h1>
          <p className="text-gray-600 mb-8">Select an action or article to learn more</p>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-1">
                <div className="text-center">
                  <h2 className="text-lg mb-4">Get personalized help and see your recent orders</h2>
                  <button className="w-full bg-[#3665F3] text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                    Sign in
                  </button>
                  <div className="mt-4 text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <a href="#" className="text-[#3665F3] hover:underline">Register now</a>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-4">
                <ArticleLink 
                  title="Buying as a guest"
                  type="Popular article"
                  duration="4 min"
                />
                <ArticleLink 
                  title="Get help with an item that hasn't arrived"
                  type="Popular article"
                  duration="4 min"
                />
                <ArticleLink 
                  title="Get help with a hacked account"
                  type="Popular article"
                  duration="2 min"
                />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <ArticleLink 
                  title="Get help if you bought as a guest"
                  type="Popular article"
                  duration="3 min"
                />
                <ArticleLink 
                  title="Creating an eBay account"
                  type="Popular article"
                  duration="2 min"
                />
                <ArticleLink 
                  title="Reset your password"
                  type="Popular article"
                  duration="2 min"
                />
              </div>
            </div>
          </div>

          {/* Browse Help Articles */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse help articles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <HelpCategory 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.8 9H4.8L3 3z M7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M17 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
              }
              title="Buying" 
            />
            <HelpCategory 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10l2 4H5l2-4z M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"/>
                </svg>
              }
              title="Selling" 
            />
            <HelpCategory 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                </svg>
              }
              title="Account" 
            />
            <HelpCategory 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"/>
                </svg>
              }
              title="Returns and refunds" 
            />
            <HelpCategory 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              }
              title="Shipping and tracking" 
            />
            <HelpCategory 
              icon={
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5v2h6V5"/>
                </svg>
              }
              title="Fees and billing" 
            />
          </div>
          {/* Alert Banner */}
      <div className="bg-gray-50 p-4 border-b">
        <div className="max-w-6xl mx-auto flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z"/>
          </svg>
          <p className="text-gray-800">
            eBay is monitoring potential changes to tariffs and will update the eBay community as additional information becomes available.
          </p>
        </div>
      </div>

          {/* Additional Help Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Need more help?</h2>
              <p className="text-gray-600 mb-6">Get the help you need from our automated assistant, or contact an agent</p>
              <button className="bg-[#3665F3] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Contact us
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Other options for you</h2>
              <div className="space-y-4">
                <a href="#" className="block text-[#3665F3] hover:underline">Ask the Community</a>
                <a href="#" className="block text-[#3665F3] hover:underline">Start a return</a>
                <a href="#" className="block text-[#3665F3] hover:underline">Report an item that hasn't arrived</a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-sm text-gray-600">
            <nav className="flex flex-wrap gap-4 mb-4">
              <a href="#" className="hover:underline">About eBay</a>
              <a href="#" className="hover:underline">Announcements</a>
              <a href="#" className="hover:underline">Community</a>
              <a href="#" className="hover:underline">Security Center</a>
              <a href="#" className="hover:underline">Seller Center</a>
              <a href="#" className="hover:underline">Policies</a>
              <a href="#" className="hover:underline">Affiliates</a>
              <a href="#" className="hover:underline">Help & Contact</a>
              <a href="#" className="hover:underline">Site Map</a>
            </nav>
            <div className="text-xs space-x-1">
              <span>Copyright © 1995-2025 eBay Inc. All Rights Reserved.</span>
              <a href="#" className="text-[#3665F3] hover:underline">Accessibility</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">User Agreement</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">Privacy</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">Consumer Health Data</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">Payments Terms of Use</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">Cookies</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">CA Privacy Notice</a>
              <span>•</span>
              <a href="#" className="text-[#3665F3] hover:underline">Your Privacy Choices</a>
              <span>and</span>
              <a href="#" className="text-[#3665F3] hover:underline">AdChoice</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

function ArticleLink({ title, type, duration }) {
  return (
    <a href="#" className="block p-4 hover:bg-gray-50 rounded-lg group">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-gray-800 group-hover:text-[#3665F3]">{title}</h3>
          <p className="text-sm text-gray-600">{type} - {duration}</p>
        </div>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}

function HelpCategory({ icon, title }) {
  return (
    <a href="#" className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
      <div className="text-gray-800 mb-2">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-800 text-center">{title}</span>
    </a>
  )
}

export default App