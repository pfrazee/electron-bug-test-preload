new Worker('worker.js')
console.log('Hello from renderer. Did preload run?', !!self.preloaded)