import { useState, useEffect } from 'react';
import { Rocket, Users, Code2, Globe, Star, Sparkles, ChevronDown, Zap } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Code2,
      title: '技术探索',
      description: '攻克每一个技术难题，用代码创造无限可能'
    },
    {
      icon: Users,
      title: '远程协作',
      description: '跨越时空的团队协作，释放创造力'
    },
    {
      icon: Globe,
      title: '全球机会',
      description: '连接全球项目，拓展职业边界'
    },
    {
      icon: Sparkles,
      title: '自由工作',
      description: '只工作不上班，掌控自己的时间'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0%, black 100%),
                             radial-gradient(2px 2px at 20% 30%, white, transparent),
                             radial-gradient(2px 2px at 60% 70%, white, transparent),
                             radial-gradient(1px 1px at 50% 50%, white, transparent),
                             radial-gradient(1px 1px at 80% 10%, white, transparent),
                             radial-gradient(2px 2px at 90% 60%, white, transparent),
                             radial-gradient(1px 1px at 33% 85%, white, transparent),
                             radial-gradient(1px 1px at 15% 10%, white, transparent)`,
            backgroundSize: '100% 100%, 200% 200%, 200% 200%, 200% 200%, 200% 200%, 200% 200%, 200% 200%, 200% 200%'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div
          className="absolute inset-0 flex items-center justify-center opacity-10"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <Rocket className="w-96 h-96 text-cyan-400" strokeWidth={0.5} />
        </div>

        <div className="relative text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-8">
            <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wider">远程协作·自由工作·无限可能</span>
            <Star className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>


          <p className="text-2xl md:text-6xl font-semibold text-white">
            冒险者公会
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              开启自由工作新纪元
            </span>
          </h1>


          <div className="space-y-4 text-xl md:text-2xl text-gray-300 leading-relaxed">
            <p className="flex items-center justify-center gap-3">
              <Zap className="w-6 h-6 text-cyan-400" />
              我们迎难而上，攻克每一个难题。
            </p>
            <p className="flex items-center justify-center gap-3">
              <Code2 className="w-6 h-6 text-blue-400" />
              我们追求卓越，用代码诠释艺术。
            </p>
            <p className="flex items-center justify-center gap-3">
              <Rocket className="w-6 h-6 text-purple-400" />
              我们穿越迷雾，探索技术的边界。
            </p>
          </div>

          <div className="pt-8">
          <p className="text-3xl md:text-3xl font-bold text-white">
              让每一位冒险者，都能实现
            </p>
            <p className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              "只工作不上班"的自由理想！
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="https://guild.adventurer.tech/" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10">开始探索</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://guild.adventurer.tech/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
              了解更多
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 transform animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                冒险者公会平台
              </span>
            </h2>
            <p className="text-xl text-gray-400">为程序员打造的远程协作平台</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-3xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6">
                <Rocket className="w-10 h-10 text-cyan-400" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  开启你的冒险征程
                </span>
              </h2>

              <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                加入冒险者公会，与全球顶尖程序员一起，<br />
                突破地球引力的束缚，探索代码宇宙的无限可能。
              </p>
              <a href="https://guild.adventurer.tech/" target="_blank" rel="noopener noreferrer" className="mt-12 group relative inline-flex px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
                <span className="relative z-10 flex items-center gap-3">
                  立即加入
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              冒险者公会
            </span>
          </div>
          <p className="text-gray-500 mb-4">
            探索无界，自由无限。
          </p>
          <p className="text-gray-500">
            CopyRight © 2018-2025 Adventurer's Guild. 
          </p>

        </div>
      </footer>
    </div>
  );
}

export default App;
