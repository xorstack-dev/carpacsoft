import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Book, Github, Rocket, FileText, Lock, Clock, Info } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AnimatedSection from "@/components/AnimatedSection";

const sidebarData = [
    {
        title: "Getting Started",
        links: [
            { id: "availability", label: "Availability" },
            { id: "access", label: "Getting Access" },
            { id: "swagger", label: "Using Swagger" },
            { id: "auth", label: "Advanced Authentication (OAuth)" },
        ]
    },
    {
        title: "API Policies",
        links: [
            { id: "versioning", label: "Versioning" },
            { id: "sunset", label: "API Sunset Policy" },
            { id: "breaking", label: "Breaking change definition" },
            { id: "response-codes", label: "Common Response Codes" },
        ]
    },
    {
        title: "Announcements and Recent API Changes",
        links: [
            { id: "sunset-activity", label: "Current Sunset Activity" },
            { id: "change-log", label: "API Change Log" },
            { id: "legacy-soap", label: "Legacy Soap (Unsupported)" },
        ]
    },
    {
        title: "Important Links",
        links: [
            { id: "cookbook", label: "API Cookbook", external: true },
            { id: "docs", label: "REST API Documentation", external: true },
            { id: "velocity", label: "Velocity API Documentation", external: true },
        ]
    }
];

export default function RestApi() {
    const [activeSection, setActiveSection] = useState("availability");

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-[#333]">
            {/* Developer Header */}
            <header className="bg-white border-b border-gray-200 py-4 px-6 fixed w-full z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/Logo.jpg" alt="Jama Software" className="h-8 w-auto" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-[#001e4d]">Carpac<span className="font-normal">Soft</span></span>
                            </div>
                        </Link>
                        <span className="text-[#00a7b5] font-semibold text-lg border-l border-gray-300 pl-8">Developers</span>
                    </div>
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a href="#getting-started" className="text-[10px] font-bold tracking-widest text-[#001e4d] hover:text-[#00a7b5] uppercase">Getting Started</a>
                        <a href="#rest-api" className="text-[10px] font-bold tracking-widest text-[#001e4d] hover:text-[#00a7b5] uppercase">Rest API</a>
                        <a href="https://github.com/jamasoftware" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-[#001e4d] hover:text-[#00a7b5] uppercase">Github Repository</a>
                        <a href="#api-cookbook" className="text-[10px] font-bold tracking-widest text-[#001e4d] hover:text-[#00a7b5] uppercase">API Cookbook</a>
                    </nav>
                </div>
            </header>

            <main className="flex-1 pt-[72px]">
                {/* Hero Section */}
                <section className="bg-[#2a366f] py-12 px-6">
                    <div className="container mx-auto">
                        <div className="flex items-center text-xs text-blue-200 mb-4 tracking-wider uppercase">
                            <span>Getting Started</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white tracking-tight">Jama Rest API</h1>
                    </div>
                </section>

                <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="sticky top-28 space-y-8">
                            {sidebarData.map((group, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-sm font-bold text-[#2a366f] uppercase tracking-wider">{group.title}</h3>
                                    <ul className="space-y-2">
                                        {group.links.map((link) => (
                                            <li key={link.id}>
                                                <button
                                                    onClick={() => scrollToSection(link.id)}
                                                    className={`group flex items-center text-sm transition-colors ${activeSection === link.id ? 'text-[#00a7b5] font-semibold' : 'text-gray-600 hover:text-[#00a7b5]'
                                                        }`}
                                                >
                                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">•</span>
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1 max-w-4xl">
                        {/* Availability */}
                        <AnimatedSection id="availability" className="mb-20 scroll-mt-32">
                            <h2 className="text-3xl font-bold text-[#2a366f] mb-8">Getting Started</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-[#2a366f] mb-4">Availability</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        The REST API is available in our hosted SaaS instance Jamacloud and for on-premises customers running 8.0 or above.
                                    </p>
                                    <div className="h-px bg-gray-200 w-full mt-8"></div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Getting Access */}
                        <AnimatedSection id="access" className="mb-20 scroll-mt-32">
                            <h3 className="text-xl font-bold text-[#2a366f] mb-4">Getting Access</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>REST is enabled by default for Cloud customers.</p>
                                <p>On-premises customers can enable REST via system administration.</p>
                                <p>SOAP is not available for any supported version of the service.</p>
                            </div>
                            <div className="h-px bg-gray-200 w-full mt-8"></div>
                        </AnimatedSection>

                        {/* Using Swagger */}
                        <AnimatedSection id="swagger" className="mb-20 scroll-mt-32">
                            <h3 className="text-xl font-bold text-[#2a366f] mb-4">Using Swagger UI</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                                <p>
                                    Swagger UI is an interactive documentation tool used with REST API. This tool is available to users with a valid login and REST enabled. Swagger can be accessed through <code className="bg-gray-100 px-2 py-0.5 rounded text-blue-600">{"{Context-Path}"}/api-docs/</code>
                                </p>
                                <p>
                                    If you are not logged in, the login page will display and then take you to Swagger. If your instance of Jama does not have REST enabled you will receive this message:
                                </p>
                                <p className="text-red-500 font-mono text-sm py-2">
                                    "Can't read swagger JSON from {"{Context-Path}"}/rest/latest/api-docs"
                                </p>
                                <p>A list of resources will be displayed and you can explore all of the supported endpoints.</p>
                            </div>

                            {/* Swagger Screenshot 1 */}
                            <div className="rounded-lg shadow-xl border border-gray-200 overflow-hidden mb-12">
                                <div className="bg-[#333] px-4 py-2 flex items-center space-x-2">
                                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-[10px] font-bold italic">j</div>
                                    <div className="bg-white h-6 flex-1 rounded text-[10px] flex items-center px-3 text-gray-500">
                                        https://www.jamaland.com/rest/latest/api-docs
                                    </div>
                                    <div className="bg-[#00a7b5] px-4 h-6 text-white text-[10px] font-bold flex items-center rounded cursor-pointer">Explore</div>
                                </div>
                                <div className="p-8 bg-white">
                                    <div className="border-b border-gray-200 pb-4 mb-4">
                                        <h4 className="text-lg font-bold">Jama REST API</h4>
                                        <p className="text-xs text-gray-500 mt-1">This is the documentation for the Jama REST API.</p>
                                        <a href="#" className="text-xs text-blue-500 mt-1 block">Contact the developer</a>
                                    </div>
                                    <div className="space-y-2">
                                        {['abstractitems', 'activities', 'attachments', 'comments', 'filters', 'items'].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 px-2 hover:bg-gray-50 transition-colors cursor-pointer">
                                                <span className="font-semibold text-sm text-gray-700">{item}</span>
                                                <div className="flex space-x-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                    <span>Show/Hide</span>
                                                    <span>List Operations</span>
                                                    <span>Expand Operations</span>
                                                    <span>Raw</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Swagger Screenshot 2 - Projects Endpoint */}
                            <p className="text-gray-600 mb-8">Each endpoint will detail its parameters, request object, and response object, as well as which parameters are required.</p>

                            <div className="rounded-lg border border-gray-200 overflow-hidden mb-12 shadow-sm">
                                <div className="bg-gray-50 py-3 px-6 border-b border-gray-200 flex justify-between items-center">
                                    <h4 className="text-sm font-bold text-gray-700">projects</h4>
                                    <div className="flex space-x-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                        <span>Show/Hide</span>
                                        <span>List Operations</span>
                                        <span>Expand Operations</span>
                                        <span>Raw</span>
                                    </div>
                                </div>
                                <div className="p-0">
                                    <div className="bg-[#e7f3fe] border border-[#c3d9ec] m-4 rounded">
                                        <div className="flex">
                                            <div className="bg-[#33aadd] text-white px-4 py-1 font-bold text-xs flex items-center uppercase">GET</div>
                                            <div className="flex-1 px-4 py-1 text-xs font-mono flex items-center text-gray-800">/projects</div>
                                            <div className="px-4 py-1 text-[10px] font-bold text-[#33aadd] flex items-center uppercase">Get all projects</div>
                                        </div>
                                    </div>
                                    <div className="px-8 pb-8 pt-2">
                                        <h5 className="text-sm font-bold text-[#33aadd] mb-4">Response Class</h5>
                                        <div className="flex space-x-4 text-xs mb-4">
                                            <span className="font-bold border-b-2 border-gray-800 pb-1">Model</span>
                                            <span className="text-gray-400 border-b-2 border-transparent pb-1">Model Schema</span>
                                        </div>
                                        <div className="bg-white p-4 border border-gray-100 rounded text-xs font-mono text-gray-600 space-y-1">
                                            <div><span className="text-gray-900 font-bold">Project &#123;</span></div>
                                            <div className="pl-4">id <span className="text-blue-500">(integer)</span>,</div>
                                            <div className="pl-4">projectKey <span className="text-blue-500">(string)</span>,</div>
                                            <div className="pl-4">parent <span className="text-blue-500">(ID of a project)</span>,</div>
                                            <div className="pl-4">isFolder <span className="text-blue-500">(boolean)</span>,</div>
                                            <div className="pl-4">createdDate <span className="text-blue-500">(string)</span>,</div>
                                            <div className="pl-4">modifiedDate <span className="text-blue-500">(string)</span>,</div>
                                            <div className="pl-4">createdBy <span className="text-blue-500">(ID of a user)</span>,</div>
                                            <div className="pl-4">modifiedBy <span className="text-blue-500">(ID of a user)</span>,</div>
                                            <div className="pl-4">fields <span className="text-blue-500">(Map[string, Object])</span></div>
                                            <div><span className="text-gray-900 font-bold">&#125;</span></div>
                                        </div>

                                        <div className="mt-8">
                                            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100 pb-2 mb-4">Parameters</h5>
                                            <table className="w-full text-xs text-left">
                                                <thead>
                                                    <tr className="text-gray-400 uppercase tracking-wider text-[10px]">
                                                        <th className="py-2">Parameter</th>
                                                        <th className="py-2">Value</th>
                                                        <th className="py-2">Description</th>
                                                        <th className="py-2">Parameter Type</th>
                                                        <th className="py-2">Data Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    <tr>
                                                        <td className="py-4 font-bold">startAt</td>
                                                        <td className="py-4"><input type="text" className="border border-gray-200 rounded px-2 py-1 w-full max-w-[200px]" /></td>
                                                        <td className="py-4 text-gray-400 italic"></td>
                                                        <td className="py-4 text-gray-500">query</td>
                                                        <td className="py-4 text-gray-500 font-bold">integer</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-4 font-bold">maxResults</td>
                                                        <td className="py-4"><input type="text" className="border border-gray-200 rounded px-2 py-1 w-full max-w-[200px]" /></td>
                                                        <td className="py-4 text-gray-500 italic">If not set, this defaults to 20. This cannot be larger than 50</td>
                                                        <td className="py-4 text-gray-500">query</td>
                                                        <td className="py-4 text-gray-500 font-bold">integer</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button className="mt-6 bg-[#eee] border border-gray-300 px-4 py-1 rounded text-[10px] font-bold text-gray-700 hover:bg-gray-200 transition-colors">Try it out!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-gray-200 w-full mt-8"></div>
                        </AnimatedSection>

                        {/* Response Section */}
                        <section className="mb-20">
                            <p className="text-gray-600 mb-8">Fill out the desired parameters and forms and click "Try it out!" A response will be returned from the server, along with the formatted URL:</p>

                            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-lg bg-[#f9f9f9] p-6 space-y-6">
                                <div className="space-y-2">
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Request URL</h5>
                                    <div className="bg-[#ff4d4d] text-white px-2 py-1 font-mono text-xs inline-block">
                                        https://www.jamaland.com:443/rest/latest/projects
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Response Body</h5>
                                    <div className="bg-[#fff8e1] border border-[#ffe082] p-4 rounded text-xs font-mono text-gray-700 leading-relaxed overflow-x-auto">
                                        <pre>
                                            {`{
  "meta": {
    "status": "OK",
    "timestamp": "2015-09-15T17:22:33.521+0000",
    "pageInfo": {
      "startIndex": 0,
      "resultCount": 20,
      "totalResults": 37
    }
  },
  "links": {
    "data.createdBy": {
      "type": "users",
      "href": "https://www.jamaland.com/rest/latest/users/{data.createdBy}"
    },
    ...
  }
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Response Code</h5>
                                    <div className="bg-[#eee] px-2 py-1 font-mono text-xs inline-block">200</div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-200 w-full mt-12"></div>
                        </section>

                        {/* Model Schema Section */}
                        <section className="mb-20">
                            <p className="text-gray-600 mb-8">To quickly obtain the schema for a request object, click Model Schema and click on the formatted JSON in the window. A sample model will be loaded in the Body window to the left and the JSON can now be edited:</p>

                            <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                                <div className="bg-orange-50 border-b border-orange-100 py-3 px-6 flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <span className="bg-[#ea7d24] text-white px-3 py-0.5 rounded text-[10px] font-bold">PUT</span>
                                        <span className="text-xs font-mono font-bold text-gray-700">/users/&#123;userId&#125;</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase text-white">Update the user with the specified ID</span>
                                </div>
                                <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                                    <div className="space-y-4">
                                        <h5 className="text-xs font-bold text-orange-500 uppercase tracking-widest">Parameters</h5>
                                        <div className="space-y-4">
                                            <div className="flex border-b border-gray-100 pb-2">
                                                <div className="w-24 text-[10px] font-bold text-gray-700 uppercase">userId</div>
                                                <div className="flex-1"><input type="text" className="w-full border border-gray-200 rounded px-2 py-1 text-xs" value="(required)" readOnly /></div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-24 text-[10px] font-bold text-gray-700 uppercase">body</div>
                                                <div className="flex-1">
                                                    <textarea className="w-full h-64 border border-gray-200 rounded p-4 text-xs font-mono text-gray-600 focus:outline-none" defaultValue={`{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "title": "string",
  "location": "string",
  "licenseType": "UserLicenseType"
}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex space-x-4 text-xs">
                                            <span className="text-gray-400 font-bold cursor-pointer">Model</span>
                                            <span className="text-black font-bold border-b-2 border-black pb-1">Model Schema</span>
                                        </div>
                                        <div className="bg-[#fffde7] p-6 border border-[#fff9c4] rounded text-xs font-mono text-gray-700 h-[calc(100%-2rem)]">
                                            <pre>
                                                {`{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "title": "string",
  "location": "string",
  "licenseType": "UserLicenseType"
}`}
                                            </pre>
                                            <div className="absolute top-[60%] right-[45%] w-12 h-12 flex items-center justify-center transform -rotate-12 translate-x-1/2">
                                                <ArrowRight className="text-red-500 w-12 h-12" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-200 w-full mt-12"></div>
                        </section>

                        {/* Advanced Authentication (OAuth) */}
                        <AnimatedSection id="auth" className="mb-20 scroll-mt-32">
                            <h3 className="text-2xl font-bold text-[#2a366f] mb-6">Advanced Authentication (OAuth)</h3>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <div>
                                    <h4 className="text-lg font-bold text-[#2a366f] mb-2">Basic Authentication</h4>
                                    <p>Most rest clients have an easy interface for basic authentication. You must provide your username and password in the header of the request following the RFC 2617 standard.</p>
                                    <div className="bg-gray-50 p-6 rounded border border-gray-100 my-4 space-y-4 font-mono text-sm overflow-x-auto">
                                        <div>
                                            <span className="text-gray-400 italic"># Note: This type of authentication will not work in a SAML/SSO environment.</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400 italic"># Examples for username: "myusername" and password: "mypassword"</span>
                                        </div>
                                        <div className="pt-2">
                                            <span className="font-bold text-gray-800">Header</span><br />
                                            Authorization: Basic somestringoftext
                                        </div>
                                        <div className="pt-2">
                                            <span className="font-bold text-gray-800">Curl Example</span><br />
                                            curl -u myusername:mypassword http://basepath/rest/v1/projects
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#2a366f] mb-2">OAuth</h4>
                                    <p>Jamacloud users and self hosted users starting with 8.62 can authenticate REST calls via OAuth.</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-[#2a366f] mb-2">Getting Ready</h4>
                                    <p className="mb-4">To use OAuth as your method of authentication with the Jama application, you will need the following:</p>
                                    <ul className="list-disc pl-6 space-y-4">
                                        <li>A client application that supports OAuth, specifically the client credentials "flow" or "grant type". This means that your client application will take a client ID and client secret.</li>
                                        <li><span className="font-bold">Client credentials</span>, specifically a <span className="font-bold text-[#00a7b5]">client ID</span> and <span className="font-bold text-[#00a7b5]">client secret</span>. You can create these credentials via the Jama UI, by following these steps from your User Profile page:</li>
                                    </ul>
                                </div>

                                {/* OAuth Steps */}
                                <div className="mt-8 space-y-12">
                                    <div className="space-y-4">
                                        <p className="font-bold">1. Click the "Set API Credentials" button:</p>
                                        <div className="border border-gray-200 rounded shadow-lg overflow-hidden relative">
                                            {/* Mocking the Jama UI Window */}
                                            <div className="bg-[#444] text-white px-4 py-1 flex justify-between items-center">
                                                <span className="text-[10px] font-bold italic">My Profile</span>
                                                <span className="text-xs">×</span>
                                            </div>
                                            <div className="bg-[#f0f0f0] border-b border-gray-300 p-1 flex space-x-0.5 overflow-x-auto whitespace-nowrap">
                                                {['My Details', 'My Subscriptions', 'My Locked Items', 'System Locked Items', 'Review Center'].map((tab, i) => (
                                                    <div key={i} className={`px-3 py-1 text-[8px] font-bold border border-gray-300 ${i === 0 ? 'bg-white border-b-white' : 'bg-[#e0e0e0]'}`}>{tab}</div>
                                                ))}
                                            </div>
                                            <div className="bg-white p-6 min-h-[400px]">
                                                <div className="flex items-center space-x-2 text-[8px] text-gray-500 mb-6 border-b border-gray-100 pb-1">
                                                    <input type="checkbox" checked readOnly /><span className="mb-0.5">Show Welcome Page at Login</span>
                                                    <div className="flex-1"></div>
                                                    <div className="flex space-x-2">
                                                        <span className="flex items-center hover:underline cursor-pointer"><Info size={10} className="mr-0.5 text-blue-400" /> Edit Avatar</span>
                                                        <span className="flex items-center hover:underline cursor-pointer"><Lock size={10} className="mr-0.5 text-green-400" /> Change Password</span>
                                                        <span className="flex items-center bg-[#fdfdfd] border border-red-500 text-red-500 px-2 rounded-sm cursor-pointer shadow-sm">
                                                            <Rocket size={10} className="mr-0.5" /> Set API Credentials
                                                        </span>
                                                        <span className="flex items-center hover:underline cursor-pointer"><FileText size={10} className="mr-0.5 text-orange-400" /> Edit Settings</span>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-8">
                                                    <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center">
                                                        <div className="opacity-20"><Info size={48} /></div>
                                                    </div>
                                                    <div className="flex-1 space-y-3">
                                                        <div className="grid grid-cols-3 text-[10px] gap-2">
                                                            <span className="font-bold text-gray-500">Username:</span><span className="col-span-2">sample</span>
                                                            <span className="font-bold text-gray-500">First Name:</span><span className="col-span-2">Sample</span>
                                                            <span className="font-bold text-gray-500">Last Name:</span><span className="col-span-2">User</span>
                                                            <span className="font-bold text-gray-500">Email Address:</span><span className="col-span-2 text-blue-500 underline">admin@my.domain.com</span>
                                                            <span className="font-bold text-gray-500">Title:</span><span></span>
                                                            <span className="font-bold text-gray-500">Phone Number:</span><span></span>
                                                            <span className="font-bold text-gray-500">Location:</span><span></span>
                                                            <span className="font-bold text-gray-500">Notes:</span><span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-between items-center">
                                                <span className="text-[10px] text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
                                                <button className="bg-gray-100 border border-gray-300 px-4 py-0.5 rounded text-[10px] text-gray-700">Close</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-bold">2. Enter a name for your application/integration:</p>
                                        <div className="border border-gray-200 rounded shadow-lg overflow-hidden bg-white">
                                            <div className="bg-[#444] text-white px-4 py-1 flex justify-between items-center italic text-[10px] font-bold">My Profile</div>
                                            <div className="p-6 space-y-4">
                                                <h6 className="text-xs font-bold text-gray-700">Set API Credentials using OAuth 2.0</h6>
                                                <p className="text-[10px] text-gray-600">You can create a client ID and secret that lets you pass data through Jama's REST API. This works in place of your own name and password to authenticate your API request or Jama integration. You are <span className="font-bold">limited to 20</span>. <span className="text-blue-500 hover:underline cursor-pointer">Learn more about using API credentials in Jama.</span></p>
                                                <div className="p-2 bg-blue-50 border border-blue-100 rounded flex space-x-2">
                                                    <Info size={12} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-[10px] text-blue-800">A client ID and secret is the best way to authenticate in the following situations:
                                                        <ul className="list-disc pl-4 mt-1">
                                                            <li>You are not using Jama authentication, but something like SAML, where we aren't storing your name and password</li>
                                                            <li>You don't want to store your name and password within scripts that enable an integration for security purposes</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <label className="text-[10px] font-bold text-gray-700">Name</label>
                                                    <input type="text" className="flex-1 border border-red-500 p-1 text-xs" value="Test Automation Integration" readOnly />
                                                    <button className="bg-[#00a7b5] text-white px-4 py-1 rounded-sm text-[10px] font-bold shadow-md">Create API Credentials</button>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-between items-center">
                                                <span className="text-[10px] text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
                                                <button className="bg-gray-100 border border-gray-300 px-4 py-0.5 rounded text-[10px] text-gray-700">Close</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-bold">3. Click the "Create API Credentials" button:</p>
                                        <div className="border border-gray-200 rounded shadow-lg overflow-hidden bg-white">
                                            <div className="bg-[#444] text-white px-4 py-1 flex justify-between items-center italic text-[10px] font-bold">My Profile</div>
                                            <div className="p-6 space-y-6">
                                                <p className="text-[10px] text-gray-600 italic">Copy your client secret <span className="font-bold text-gray-800 italic underline">now</span>. You will not be able to see it again.</p>
                                                <div className="bg-gray-100 border-2 border-red-500 p-4 rounded flex space-x-8">
                                                    <div>
                                                        <h6 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Client ID</h6>
                                                        <p className="text-[10px] font-mono font-bold text-gray-800">a1msfbir1osn7j</p>
                                                    </div>
                                                    <div>
                                                        <h6 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Client Secret</h6>
                                                        <p className="text-[10px] font-mono font-bold text-gray-800">apg522dcjcz6thco54qen13t5</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h6 className="text-[10px] font-bold text-gray-500 uppercase">Your API Credentials <span className="font-normal text-gray-400 ml-1">Limit to 20</span></h6>
                                                    <div className="border-t border-gray-100 pt-2 flex justify-between items-start">
                                                        <div className="flex space-x-3">
                                                            <div className="text-[10px] font-bold text-gray-800">1. Reporting Integration</div>
                                                        </div>
                                                        <span className="text-[10px] text-gray-400">×</span>
                                                    </div>
                                                    <p className="text-[8px] text-gray-400 ml-4 italic">Client ID: no3tg3rv27fznio</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-between items-center">
                                                <span className="text-[10px] text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
                                                <button className="bg-gray-100 border border-gray-300 px-4 py-0.5 rounded text-[10px] text-gray-700">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-[#00a7b5] p-6 rounded shadow-sm mt-12">
                                    <p className="font-bold text-[#2a366f] mb-2 uppercase tracking-widest text-xs">Pro Tip</p>
                                    <p className="text-gray-700">Be sure to copy your Client ID and Secret. <span className="font-bold text-black border-b border-black">The secret is only displayed once!</span></p>
                                </div>

                                <div className="mt-12 space-y-4">
                                    <h4 className="text-xl font-bold text-[#2a366f]">Legs</h4>
                                    <p>The client credentials flow as implemented by the Jama OAuth service has the following two legs:</p>
                                    <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                                        <li>Exchange client credentials for an access token (once)</li>
                                        <li>Use the access token for API requests (repeat)</li>
                                    </ol>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Empty space at bottom */}
                        <div className="h-20"></div>
                    </div>
                </div>
            </main>

            <Footer />
            <ChatWidget />
        </div>
    );
}
