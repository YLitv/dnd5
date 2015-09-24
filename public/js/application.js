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

    vpMod = function(vp)
    {
        var result = 0;
        switch (vp) {
            case 20:
            case 19:
                result = 5;
                break;
            case 18:
            case 17:
                result = 4;
                break;
            case 16:
            case 15:
                result = 3;
                break;
            case 14:
            case 13:
                result = 2;
                break;
            case 12:
            case 11:
                result = 1;
                break;
            case 0:
            case 1:
                result = -5;
                break;
            case 2:
            case 3:
                result = -4;
                break;
            case 4:
            case 5:
                result = -3;
                break;
            case 6:
            case 7:
                result = -2;
                break;
            case 8:
            case 9:
                result = -1;
                break;
        }
        return result;
    };

    getVpMod = function(vp, max_vp)
    {
        return vpMod(max_vp) - vpMod(vp);
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
            var value_vp = Math.floor(value / vp_price);
            var vp_mod = 1;
            var decr = vp_mod * result.level * value_vp;
            result.hp -= (value + decr);
            if (result.hp < 0)
            {
                value_vp = value;
                result.hp = 0;
            }
            if (value_vp > 0)
            {
                result.vp -= value_vp;
                result.max_hp -= result.level * value_vp;
                if (result.vp > result.max_vp)
                {
                    result.vp = result.max_vp;
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