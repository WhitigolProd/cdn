completecount = 0;
layoutcomplete = false;
cntn = $('.container')

window.layout = function () {
    console.log('%cCreating Layout - Please Wait', 'color: orange;')

    $('.example').remove(); // Remove Example Content



    if (sz00ervers.s1.enable) {
        cntn.add(as1).appendTo(cntn)
        completecount += 1;
    }

    if (sz00ervers.s2.enable) {
        cntn.add(as2).appendTo(cntn)
        completecount += 1;
    }

    if (sz00ervers.s3.enable) {
        cntn.add(as3).appendTo(cntn)
        completecount += 1;
    }

    if (sz00ervers.s4.enable) {
        cntn.add(as4).appendTo(cntn)
        completecount += 1;
    }

    if (sz00ervers.s5.enable) {
        cntn.add(as5).appendTo(cntn)
        completecount += 1;
    }

    if (sz00ervers.s6.enable) {
        cntn.add(as6).appendTo(cntn)
        completecount += 1;
    }


    if (completecount >= 1) {
        $('.cs-app').waitForImages(() => {
            $('.cs-load').css('display', 'none');
            
            // Lockdown
            if (launcher.lockdown) {
                $('.cs-lockdown').css('display', 'flex')
            }
        })
    }

    // log('Finished Creating Layout!', 'color: lime;')

    // Create Variables for Server Launch Elements
    const cl1 = $('.cs-launch-1');
    const cl2 = $('.cs-launch-2');
    const cl3 = $('.cs-launch-3');
    const cl4 = $('.cs-launch-4');
    const cl5 = $('.cs-launch-5');
    const cl6 = $('.cs-launch-6');
}