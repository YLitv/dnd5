$(document).ready(function(){
    var add_panel = $("#add");
    var dashboard_panel = $("#dashboard");
    var dashboard_table = $(".dashboard_table");
    var template_profile = dashboard_panel.find("#template_profile");

    add_panel.hide();
    dashboard_panel.show();

    $(".btn_add").click(function(){
        dashboard_panel.hide();
        add_panel.show();
    });

    $(".btn_back").click(function(){
        add_panel.hide();
        dashboard_panel.show();
    });

    $("#add_form .btn_submit").click(function(){
        var name = add_panel.find('form input.name').val();
        var level = add_panel.find('form input.level').val();
        var hp = add_panel.find('form input.hp').val();
        var vp = add_panel.find('form input.vp').val();

        if (name != '' && level > 0 && hp > 0 && vp > 0)
        {
            var row = template_profile.clone();
            row.find('.name').html(name);

            var level_row = row.find('.level');
            level_row.attr('data-level', level);
            level_row.html(level);

            var hp_row = row.find('.hp');
            hp_row.html(hp);

            var max_hp = row.find('.max_hp');
            max_hp.html(hp);

            var t_max_hp = row.find('.t_max_hp');
            t_max_hp.html(hp);


            var vp_max_row = row.find('.max_vp');
            vp_max_row.html(vp);

            var vp_row = row.find('.vp');
            vp_row.html(vp);

            row.show();
            dashboard_table.append(row);

            add_panel.hide();
            dashboard_panel.show();

            add_panel.find('form input.name').val('');
            add_panel.find('form input.level').val('');
            add_panel.find('form input.hp').val('');
            add_panel.find('form input.vp').val('');
        }
    });
});