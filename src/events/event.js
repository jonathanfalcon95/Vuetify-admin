export default [
  {
    name: 'SHOW_MESSAGE',
    callback: function (params) {
      // this.$toasted.show(params.text);
      this.snackbar = {
        show: true,
        color: 'green',
        text: params.text,
      }
    },
  },
  {
    name: 'SHOW_ERROR',
    callback: function (params) {
    this.$toasted.error(params.text, {
      theme: 'outline',
      position: 'top-right',
      duration: 5000,
      icon: {
        name: 'mdi-account',
        after: true, // this will append the icon to the end of content
    },
   })

      console.log('error')
    },
  },
  {
    name: 'LOADING',
    callback: function (flag) {
      this.$loading(flag)
    },
  },
]
