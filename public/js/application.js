$(document).ready(function(){
    var add_panel = $("#add");
    var dashboard_panel = $("#dashboard");
    var dashboard_table = $(".dashboard_table");
    var template_profile = dashboard_panel.find("#template_profile");
    var profiles = [];

    var render = function()
    {
        dashboard_table.html('');

        $(profiles).each(function(index){

            var profile = this;
            var row = template_profile.clone();
            row.attr('data-id', profile.id);

            row.find('.name').html(profile.name);
            row.find('.selector input').attr('data-id', profile.id);

            row.find('.level').html(profile.level);
            row.find('.hp').html(profile.hp);
            row.find('.max_hp').html(profile.max_hp);
            row.find('.t_max_hp').html(profile.t_max_hp);
            row.find('.vp').html(profile.vp);
            row.find('.max_vp').html(profile.max_vp);

            row.show();
            dashboard_table.append(row);
        });
    };

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
            add_panel.hide();
            dashboard_panel.show();

            var id = Math.floor(Math.random()* 1000000);

            profiles.push({
                id: id,
                name: name,
                level: level,
                hp: hp,
                max_hp: hp,
                t_max_hp: hp,
                vp: vp,
                max_vp: vp
            });

            render();

            add_panel.find('form input.name').val('');
            add_panel.find('form input.level').val('');
            add_panel.find('form input.hp').val('');
            add_panel.find('form input.vp').val('');
        }
    });

    $(".btn_damage").click(function(){
        var value = dashboard_panel.find('.control_form input[name=value]').val();
        dashboard_table.find("input:checked:enabled").each(function(){
           var profile_id = $(this).attr('data-id');
            var result = $.grep(profiles, function(e){ return e.id == profile_id; });
            result = result[0];
            result.hp -= value;
            var value_vp = Math.floor(value / 10);
            if (value_vp > 0)
            {
                result.vp -= value_vp;
                result.max_hp -= result.level * value_vp;
            }
        });
        render();
    });
});