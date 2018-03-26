let cases = []
for (let i = 1; i <= 1000; i++) {
    cases.push(i);
}
const assert_rules = ["login"]
const assert_fieldTypes = ["accounts.password", "accounts.username", "submit"]
cases.forEach(i => {
    it('visits and verifies matched element: ' + i, () => {
        cy.visit('https://s3-us-west-2.amazonaws.com/public-test-swch/myaccount_greenmountain_com-1514499557386.html');
        cy.reload(true);
        assert_rules.forEach(rule => {
            cy.get("[data-swch-rule*='" + rule + "']", {timeout: 5000});
        });
        assert_fieldTypes.forEach(fieldType => {
            cy.get("[data-swch-fieldtype*='" + fieldType + "']", {timeout: 5000});
        });
    });
});
