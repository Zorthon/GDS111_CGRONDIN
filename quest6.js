class Player {
    constructor() {
        this.health = 0;
        this.weapon = 0;
        this.armor = 0;
        this.name = "";
    }

    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
        return this.health;
    }
    setWeapon(newWeapon) {
        this.weapon = newWeapon;
    }
    getWeapon() {
        return this.weapon;
    }
    setArmor(newArmor) {
        this.armor = newArmor;
    }
    getArmor() {
        return this.armor;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
}

const lichKing = new Player();
lichKing.setHealth(100);
lichKing.setWeapon(1);
lichKing.setArmor(1);
lichKing.setName("Lich King");
console.log("Armor used = " + lichKing.getArmor());
console.log("Health level = " + lichKing.getHealth());
console.log("Player name = " + lichKing.getName());
console.log("Weapon used = " + lichKing.getWeapon());