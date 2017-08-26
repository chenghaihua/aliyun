~(function(){
    function searchAnimate(){
        var $search=$(".topbar-search"),
            $search_btn=$search.children("i");

        $search_btn.on("click",function(){
            $search.toggleClass("hover");
        });
    }
    searchAnimate();
})();