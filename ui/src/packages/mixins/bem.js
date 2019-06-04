export default {
    methods: {
        bem(name, val){
            let suffix = '';

            if (val)
                suffix = `--${val}`;

            return `cy-${name}${suffix}`;
        }
    }
}