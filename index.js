/* eslint-env browser, jquery */
/* eslint no-var: "off" */
// $(() => {
//   var $video = $('#video');
//   var url = '//cdn.jsdelivr.net/jquery.scrollto/2.1.2/jquery.scrollTo.min.js';
//   $.getScript(url, () => {
//     var debouncedListener = _.debounce(() => {
//       $(window).scrollTo($video.offset(), {
//         duration: 500,
//       });
//     }, 500);

//     $(window).on('touchstart', () => {
//       $(window).stop();
//     });

//     $(window).on('scroll', debouncedListener);
//   });
// });

// $(() => {
//   var coord_start, coord_end;

//   $(window).on('touchstart', (e) => {
//     var touch = e.originalEvent.touches[0];
//     console.log('touch.clientY', touch.clientY);
//     console.log('touch.pageY', touch.pageY);
//     console.log('touch.screenY', touch.screenY);
        
//   });

//   // $(window).on('resize', (e) => {
//   //   console.log('window.outerHeight', window.outerHeight);
//   //   console.log('window.height', window.height);
//   //   console.log('window.innerHeight', window.innerHeight);
//   // });

// });