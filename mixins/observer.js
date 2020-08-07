export default{
    methods: {
        inView(isVisible, entry) {
          if (isVisible) {
            entry.target.classList.add('showElement')
          }      
        },
      },
 }