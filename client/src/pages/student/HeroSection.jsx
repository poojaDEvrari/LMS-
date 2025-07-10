import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Search, Sparkles, BookOpen } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if(searchQuery.trim() !== ""){
      console.log(`Searching for: ${searchQuery}`);
      // navigate(`/course/search?query=${searchQuery}`)
    }
    setSearchQuery("");
  }

  const exploreCoursesHandler = () => {
    console.log("Exploring all courses");
    // navigate(`/course/search?query`)
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-700 to-rose-600 dark:from-gray-900 dark:via-purple-900 dark:to-rose-900 py-16 px-4 text-center flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDuration: '7s', animationDelay: '3s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-yellow-300/70 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-300/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-cyan-300/80 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-purple-300/70 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        
        <Sparkles className="absolute top-16 right-1/4 w-8 h-8 text-white/40 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3s'}} />
        <BookOpen className="absolute bottom-20 right-1/4 w-10 h-10 text-rose-200/30 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}} />
        <Sparkles className="absolute top-1/3 left-10 w-6 h-6 text-violet-200/50 animate-pulse" style={{animationDelay: '1s', animationDuration: '2.5s'}} />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Elegant Badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-500">
          <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" style={{animationDuration: '3s'}} />
          <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent font-semibold">Premium Learning Experience</span>
        </div>

        {/* Main heading with enhanced animation */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transform hover:scale-105 transition-all duration-700">
          <span className="inline-block animate-pulse" style={{animationDuration: '2s'}}>Discover</span>{' '}
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-rose-300 bg-clip-text text-transparent animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s'}}>
            Extraordinary
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent inline-block animate-pulse" style={{animationDuration: '2.5s', animationDelay: '1s'}}>
            Learning
          </span>
        </h1>
        
        {/* Elegant subtitle */}
        <p className="text-violet-100 dark:text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light opacity-90 animate-pulse" style={{animationDuration: '4s', animationDelay: '1.5s'}}>
          Elevate your expertise with world-class courses designed by industry leaders. 
          <br className="hidden md:block" />
          <span className="text-rose-200 font-medium">Transform your potential into mastery.</span>
        </p>

        {/* Luxury search form */}
        <div className="flex items-center bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-3xl mx-auto mb-8 border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
          <div className="flex-grow relative">
            <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-300 w-6 h-6 animate-pulse" style={{animationDuration: '2s'}} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What extraordinary skill will you master today?"
              className="flex-grow border-none focus:outline-none focus:ring-0 pl-20 pr-8 py-6 text-white placeholder-gray-300 bg-transparent text-xl font-light w-full"
              onKeyPress={(e) => e.key === 'Enter' && searchHandler(e)}
            />
          </div>
          <button 
            onClick={searchHandler}
            className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-6 m-3 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-rose-500/25"
          >
            <span className="flex items-center gap-3">
              Discover
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </span>
          </button>
        </div>

        {/* Elegant CTA Button */}
        <div className="flex justify-center mb-12">
          <button 
            onClick={exploreCoursesHandler}
            className="group relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl hover:from-white/20 hover:to-white/15 text-white border-2 border-white/30 hover:border-white/50 px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-3">
              <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Explore Premium Collection
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-rose-400 rounded-full animate-pulse group-hover:animate-ping"></div>
            </span>
          </button>
        </div>

        {/* Luxury stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-300 to-rose-400 bg-clip-text text-transparent mb-4 animate-pulse" style={{animationDuration: '3s'}}>50k+</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
            </div>
            <div className="text-violet-200 dark:text-gray-300 text-lg font-medium">Elite Students</div>
            <div className="text-violet-300 dark:text-gray-400 text-sm mt-1">Worldwide Community</div>
          </div>
          
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}>1000+</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="text-violet-200 dark:text-gray-300 text-lg font-medium">Master Classes</div>
            <div className="text-violet-300 dark:text-gray-400 text-sm mt-1">Expert Curated</div>
          </div>
          
          <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500">
            <div className="relative">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent mb-4 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}>98%</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
            <div className="text-violet-200 dark:text-gray-300 text-lg font-medium">Success Rate</div>
            <div className="text-violet-300 dark:text-gray-400 text-sm mt-1">Guaranteed Results</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;