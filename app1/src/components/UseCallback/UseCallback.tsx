import { useCallback, useState, memo } from "react";

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactComponent {
    contact: Contact;
    onCall: (name: string) => void;
}


const ContactCard = memo(({contact, onCall} : ContactComponent) => {
    console.info('redenrizando a: ', contact.name);

    return (
        <div>
            <h3>{contact.name}</h3>
            <h4>{contact.phone}</h4>
            <button onClick={() => onCall(contact.name)}>Call</button>
        </div>
    )
})


const ContactList = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        {
            id: 1, 
            name: 'pear', 
            phone: '10101010101'
        },
        {
            id: 2, 
            name: 'apple', 
            phone: '287321763127'
        },
        {
            id: 3, 
            name: 'melon', 
            phone: '123541234'
        }
    ]);
    const [contactCalled, setContactCalled] = useState<string>("");

    const callContact = useCallback((name: string) => setContactCalled(`Calling: ${name}`), []);

    const addNewContact = () => {
        const newContact: Contact = {
             id: contacts.length + 1,
             name: `Product ${contacts.length + 1}`,
             phone: `${Math.random() * 500}`
        }

        setContacts([...contacts, newContact]);
    };

    return(
        <section>
            {
                contacts.map(contact => (
                    <ContactCard
                        key = {contact.id}
                        contact = {contact}
                        onCall = {callContact}
                    />
                ))
            }
            
            <button onClick={addNewContact}>Add Contact</button>
            
            {contactCalled && <p>{contactCalled}</p>}
        </section>
    )
}

export default ContactList;