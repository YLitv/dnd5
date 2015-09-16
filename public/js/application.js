$(document).ready(function(){
    var add_panel = $("#add");
    var dashboard_panel = $("#dashboard");
    var dashboard_table = $(".dashboard_table");
    var template_profile = dashboard_panel.find("#template_profile");
    var profiles = [];
    var vp_price = 10;

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
                level: parseInt(level),
                hp: parseInt(hp),
                max_hp: parseInt(hp),
                t_max_hp: parseInt(hp),
                vp: parseInt(vp),
                max_vp: parseInt(vp)
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
        value = parseInt(value);
        dashboard_table.find("input:checked:enabled").each(function(){
           var profile_id = $(this).attr('data-id');
            var result = $.grep(profiles, function(e){ return e.id == profile_id; });
            result = result[0];
            result.hp -= value;
            var value_vp = Math.floor(value / vp_price);
            if (value_vp > 0)
            {
                var decr = result.level * value_vp;
                result.vp -= (value_vp + decr);
                result.max_hp -= decr;
                if (result.vp > result.max_hp)
                {
                    result.vp = result.max_hp;
                }
            }
        });
        render();
    });

    $(".btn_heal").click(function(){
        var value = dashboard_panel.find('.control_form input[name=value]').val();
        value = parseInt(value);
        dashboard_table.find("input:checked:enabled").each(function(){
           var profile_id = $(this).attr('data-id');
            var result = $.grep(profiles, function(e){ return e.id == profile_id; });
            result = result[0];

            while(Math.floor(value / vp_price) > 0)
            {
                if (result.hp + value > result.max_hp)
                {
                    value -= (result.max_hp - result.hp);
                    result.hp = result.max_hp;
                    if (value >= vp_price && result.vp < result.max_vp) {
                        result.vp += 1;
                        result.max_hp += result.level;
                        value -= vp_price;
                    }
                } else {
                    result.hp += value;
                    value = 0;
                }
            }

            result.hp += value;
            if (result.hp > result.max_hp)
            {
                result.hp = result.max_hp;
            }
        });
        render();
    });
});