window.closeDiscordDarker=function(){let delcode=document.getElementById('d-darker')
if(!document.getElementById('d-darker')){return new Error('d-darker isnt injected')}
delcode.remove()
alert('Uninstalled DiscordDarker! If you want it back, just use the same script.')}
window.openDiscordDarker=function(){if(document.getElementById('d-darker')){alert('You already injected D-Darker.')}else{let code=document.createElement('style');code.id="d-darker";code.innerText=`*{script-src:'self' 'unsafe-inline'}span,.userInfoBody-1zgAd0,.clamped-2ZePhX{color:#000}.membersWrap-3NUR2t .hiddenMembers-8kpYM0,.scroller-3X7KbA,.members-3WRCEx,.flex-2S1XBF,.content-2hZxGK .container-3PVapX,.content-FDHp32,.container-3PVapX,.content-FDHp32,.formNotice-2nS8ey,.container-YkUktl,.authedApp-8q3NA9,.ontentColumn-1C7as,.app-3xd6d0{position:relative;background-color:#090909}.thin-31rlnD{background-color:relative}.editor-H2NA06>span,.markup-eYLPri{color:#000}.scrollerContent-2SW0kQ,.container-2sjPya,.markup-eYLPri,.messageContent-2t3eCI,.headerText-1qIDDT,.subtext-2HDqJ7,.customStatus-1UAQAK{color:#fff}.member-2gU6Ar{margin-right:10px}.form-3gdLxP,.webkit-QgSAqd{margin-top:10px}.animatedContainer-2laTjx{z-index:2;width:234px}.container-2o3qEW,.containerDefault-YUSmu3,.containerDefault-3TQ5YN,.sectionDivider-189lqb,.content-2a4AW9,.container-ZMc96U,.title-31SJ6t,.sidebarRegion-1VBisG,.sidebar-nqHbhN,.title-31SJ6t,.container-ZMc96U,.form-3gdLxP,.chatContent-3KubbW,.form-3gdLxP:before,.member-2gU6Ar,.members-3WRCEx{background-color:#202020}.userInfoBody-1zgAd0,.clamped-2ZePhX,.message-372Ods,em{text-align:center;color:#000}`;document.head.appendChild(code);alert('DiscordDarker was injected! Use window.closeDiscordDarker() in the console to close it!')}
alert('DiscordDarker was loaded! To start using it, enter window.openDiscordDarker() in the devtools console.')
